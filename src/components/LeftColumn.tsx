import React from "react";
import UpcomingEvents from "./widgets/UpcomingEvents";
import Shortcuts from "./widgets/Shortcuts";

const LeftColumn: React.FC = () => {
  return (
    <div className="space-y-6">
      <UpcomingEvents />
      <Shortcuts
        title="Contacts"
        items={[
          {
            id: 1,
            name: "Ali Frame",
            avatar: "https://i.pravatar.cc/150?u=fake@pravatar.com",
          },
          {
            id: 2,
            name: "Al Adam android online",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
          },
          {
            id: 3,
            name: "A1 demo referral contact",
            avatar: "https://i.pravatar.cc/150?img=1",
          },
        ]}
      />
      <Shortcuts
        title="Projects"
        items={[
          { id: 1, name: "A Training Project", color: "bg-blue-500" },
          { id: 2, name: "A Test SMS", color: "bg-green-500" },
          { id: 3, name: "A Training Project", color: "bg-yellow-500" },
        ]}
      />
      <Shortcuts
        title="Albums"
        items={[
          {
            id: 1,
            name: "Robertson Trust",
            thumbnail: "https://i.pravatar.cc/150?img=2",
          },
          {
            id: 2,
            name: "IASE Funding 2022",
            thumbnail: "https://i.pravatar.cc/150?img=4",
          },
          {
            id: 3,
            name: "Funded Projects",
            thumbnail: "https://i.pravatar.cc/150?img=5",
          },
        ]}
      />
    </div>
  );
};

export default LeftColumn;
