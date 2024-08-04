import { Event, User } from "@prisma/client";
import { Fragment } from "react";
import Connector from "../history/connector";
import MajorEvent from "../history/major-event";
import MinorEvent from "../history/minor-event";

export type ProfileEventsProps = {
  events: Event[];
  image: User["image"];
  name: User["name"];
}

const ProfileEvents = ({ events, image, name
}: ProfileEventsProps) => {
  return (
    <div className="space-y-2">
      {
        events.map((event) => (
          <Fragment key={event.id}>
            {event.type === "major" && <MajorEvent event={event} image={image} name={name} />}
            {event.type === "minor" && <MinorEvent event={event} image={image} name={name} />}
            <Connector />
          </Fragment>
        ))
      }
    </div>
  );
};

export default ProfileEvents;
