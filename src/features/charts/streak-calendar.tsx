import { cn, getActivityColor, getFirstSunday } from "@/lib/utils";
import {
  addDays,
  differenceInCalendarWeeks,
  eachDayOfInterval,
  eachMonthOfInterval,
  endOfMonth,
  format,
  nextMonday,
  previousMonday,
  startOfMonth,
  subDays,
  subMonths,
} from "date-fns";

const StreakCalendar = ({
  className,
  activity,
}: {
  className?: string;
  activity: {
    id: string;
    userId: string;
    date: Date;
    count: number;
    createdAt: Date;
    updatedAt: Date;
  }[];
}) => {
  const start = getFirstSunday(startOfMonth(subMonths(new Date(), 4)));
  const end = new Date(); // end = now
  const days = eachDayOfInterval({
    start: addDays(start, 1),
    end,
  });
  const monthsInRange = eachMonthOfInterval({ start, end });
  const totalWeeks = Math.ceil(days.length / 7);

  // todo: move to utils
  const getWeeksInMonth = (date: Date) => {
    const firstDay = startOfMonth(date);
    const lastDay = endOfMonth(date);
    const firstMonday = nextMonday(subDays(firstDay, 1));
    const lastMonday = previousMonday(addDays(lastDay, 1));
    return differenceInCalendarWeeks(lastMonday, firstMonday) + 1;
  };
  return (
    <div
      className={cn(
        "border bg-card text-card-foreground rounded-lg shadow-sm",
        "flex flex-col justify-center items-center p-5",
        className
      )}
    >
      <div
        className={cn(
          "flex jusitfy-center items-center",
          "grid text-xs w-full gap-1 content-center",
          `grid-rows-[auto_repeat(8,_1fr)]`
        )}
        style={{ gridTemplateColumns: `auto repeat(${totalWeeks}, 1fr)` }}
      >
        {/* Empty space for the top left corner */}
        <div className="col-start-1 row-start-1" />

        {/* Month and weeks */}
        {monthsInRange.map((month, index) => {
          const weeksBetween = getWeeksInMonth(month);
          return (
            <div
              key={index}
              className="row-span-1 row-start-1 text-start"
              style={{
                gridColumn: `span ${weeksBetween} / span ${weeksBetween}`,
              }}
            >
              {format(month, "MMM")}
            </div>
          );
        })}

        {/* Days of the week */}
        {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day, index) => (
          <div
            key={day}
            className={cn(
              "size-4 flex justify-center items-center",
              "col-span-1 row-span-1 col-start-1",
              index % 2 ? "block" : "hidden"
            )}
            style={{ gridRow: index + 2 }}
          >
            {day}
          </div>
        ))}

        {/* Days cubes */}
        {days.map((day, index) => {
          const dayOfWeek = Math.floor(index / 7); // between 0 Sun and 6 Sat = "Which day of the week ?"
          const weekIndex = index % 7; // Column index
          return (
            <div
              key={format(day, "yyyy-MM-dd")}
              className={cn(
                "size-5 rounded-sm border border-secondary/30 text-center text-secondary",
                getActivityColor(activity[index]?.count),
                "row-span-1 col-span-1"
              )}
              style={{
                gridColumn: dayOfWeek + 2,
                gridRow: weekIndex + 2,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StreakCalendar;
