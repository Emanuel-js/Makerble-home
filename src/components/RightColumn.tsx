import React from 'react';
import Shortcuts from './widgets/Shortcuts';
import ProgressBars from './widgets/ProgressBars';
import Tasks from './widgets/Tasks';

const RightColumn: React.FC = () => {
  return (
    <div className="space-y-6">
      <Shortcuts
        title="Organizations"
        items={[
          { id: 1, name: 'An Organisation Demo', icon: '🏢' },
          { id: 2, name: 'A Showcase International Development Education Charity', icon: '🌍' },
          { id: 3, name: 'Oak Tree Secondary School', icon: '🏫' },
        ]}
      />
      <Shortcuts
        title="Followers"
        items={[
          { id: 1, name: 'Emma Watson', avatar: 'https://source.unsplash.com/random/40x40?face&4' },
          { id: 2, name: 'Tom Hardy', avatar: 'https://source.unsplash.com/random/40x40?face&5' },
          { id: 3, name: 'Sophie Turner', avatar: 'https://source.unsplash.com/random/40x40?face&6' },
        ]}
      />
      <Shortcuts
        title="Following"
        items={[
          { id: 1, name: 'Chris Evans', avatar: 'https://source.unsplash.com/random/40x40?face&7' },
          { id: 2, name: 'Scarlett Johansson', avatar: 'https://source.unsplash.com/random/40x40?face&8' },
          { id: 3, name: 'Robert Downey Jr.', avatar: 'https://source.unsplash.com/random/40x40?face&9' },
        ]}
      />
      <ProgressBars />
      <Tasks />
    </div>
  );
};

export default RightColumn;