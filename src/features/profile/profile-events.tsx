import { isMajorEvent } from "@/lib/utils";
import type { Event, User } from "@prisma/client";
import { Fragment } from "react";
import Connector from "../history/connector";
import MajorEvent from "../history/major-event";
import MinorEvent from "../history/minor-event";

export type ProfileEventsProps = {
  events: Event[];
  profilePicture: User["image"];
  profileName: User["name"];
}

const ProfileEvents = ({ events, profilePicture, profileName }: ProfileEventsProps) => {
  return (
    <div className="space-y-2">
      {
        events.map((event) => (
          <Fragment key={event.id}>
            {isMajorEvent(event.type) ? (
              <MajorEvent event={event}
                profilePicture={profilePicture}
                profileName={profileName} />
            ) : (
              <MinorEvent event={event}
                profilePicture={profilePicture}
                profileName={profileName} />
            )}
            <Connector />
          </Fragment>
        ))
      }
    </div>
  );
};

export default ProfileEvents;
