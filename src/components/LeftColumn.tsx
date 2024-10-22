import React from 'react';
import UpcomingEvents from './widgets/UpcomingEvents';
import Shortcuts from './widgets/Shortcuts';

const LeftColumn: React.FC = () => {
  return (
    <div className="space-y-6">
      <UpcomingEvents />
      <Shortcuts
        title="Contacts"
        items={[
          { id: 1, name: 'Ali Frame', avatar: 'https://source.unsplash.com/random/40x40?face&1' },
          { id: 2, name: 'Al Adam android online', avatar: 'https://source.unsplash.com/random/40x40?face&2' },
          { id: 3, name: 'A1 demo referral contact', avatar: 'https://source.unsplash.com/random/40x40?face&3' },
        ]}
      />
      <Shortcuts
        title="Projects"
        items={[
          { id: 1, name: 'A Training Project', color: 'bg-blue-500' },
          { id: 2, name: 'A Test SMS', color: 'bg-green-500' },
          { id: 3, name: 'A Training Project', color: 'bg-yellow-500' },
        ]}
      />
      <Shortcuts
        title="Albums"
        items={[
          { id: 1, name: 'Robertson Trust', thumbnail: 'https://source.unsplash.com/random/40x40?album' },
          { id: 2, name: 'IASE Funding 2022', thumbnail: 'https://source.unsplash.com/random/40x40?funding' },
          { id: 3, name: 'Funded Projects', thumbnail: 'https://source.unsplash.com/random/40x40?project' },
        ]}
      />
    </div>
  );
};

export default LeftColumn;