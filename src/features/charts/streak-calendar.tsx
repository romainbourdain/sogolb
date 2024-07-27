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

const StreakCalendar = ({ className }: { className?: string }) => {
  const start = getFirstSunday(startOfMonth(subMonths(new Date(), 4)));
  const end = new Date(); // end = now
  const days = eachDayOfInterval({
    start: addDays(start, 1),
    end,
  });

  // Get unique months within the range
  const monthsInRange = eachMonthOfInterval({ start, end });

  // Calculate the number of weeks to display
  const totalWeeks = Math.ceil(days.length / 7);

  const fake_activity = [
    days.map((day) => ({
      date: format(day, "yyyy-MM-dd"),
      count: Math.floor(Math.random() * 10),
    })),
  ];

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
              {`${format(month, "MMM")} ${weeksBetween}`}
            </div>
          );
        })}

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

        {days.map((day, index) => {
          const dayOfWeek = Math.floor(index / 7); // between 0 Sun and 6 Sat = "Which day of the week ?"
          const weekIndex = index % 7; // Column index
          return (
            <div
              key={format(day, "yyyy-MM-dd")}
              className={cn(
                "size-5 rounded-sm border border-secondary/30 text-center text-secondary",
                getActivityColor(fake_activity[0][index].count),
                "row-span-1 col-span-1"
              )}
              style={{
                gridColumn: dayOfWeek + 2,
                gridRow: weekIndex + 2,
              }}
            >
              {day.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StreakCalendar;
