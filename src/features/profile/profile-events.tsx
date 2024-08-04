import Connector from "@/features/history/connector";
import MajorEvent from "@/features/history/major-event";
import MinorEvent from "@/features/history/minor-event";
import { getDefaultUserName } from "@/lib/utils";

const ProfileEvents = ({ image, name }: { image: string; name: string }) => {
  const userName = getDefaultUserName(name || "");
  return (
    <div className="space-y-2">
      <MajorEvent image={image} name={name} userName={userName} />
      <Connector />
      <MinorEvent image={image} name={name} userName={userName} />
      <Connector />
      <MajorEvent image={image} name={name} userName={userName} />
    </div>
  );
};

export default ProfileEvents;
