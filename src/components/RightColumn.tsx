import React from "react";
import Shortcuts from "./widgets/Shortcuts";
import ProgressBars from "./widgets/ProgressBars";
import Tasks from "./widgets/Tasks";

const RightColumn: React.FC = () => {
  return (
    <div className="space-y-6">
      <Shortcuts
        title="Organizations"
        items={[
          { id: 1, name: "An Organisation Demo", icon: "🏢" },
          {
            id: 2,
            name: "A Showcase International Development Education Charity",
            icon: "🌍",
          },
          { id: 3, name: "Oak Tree Secondary School", icon: "🏫" },
        ]}
      />
      <Shortcuts
        title="Followers"
        items={[
          {
            id: 1,
            name: "Emma Watson",
            avatar: "https://i.pravatar.cc/150?img=3",
          },
          {
            id: 2,
            name: "Tom Hardy",
            avatar: "https://i.pravatar.cc/150?img=1",
          },
          {
            id: 3,
            name: "Sophie Turner",
            avatar: "https://i.pravatar.cc/150?img=2",
          },
        ]}
      />
      <Shortcuts
        title="Following"
        items={[
          {
            id: 1,
            name: "Chris Evans",
            avatar: "https://i.pravatar.cc/150?img=4",
          },
          {
            id: 2,
            name: "Scarlett Johansson",
            avatar: "https://i.pravatar.cc/150?img=5",
          },
          {
            id: 3,
            name: "Robert Downey Jr.",
            avatar: "https://i.pravatar.cc/150?img=6",
          },
        ]}
      />
      <ProgressBars />
      <Tasks />
    </div>
  );
};

export default RightColumn;
