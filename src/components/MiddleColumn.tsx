import React from 'react';
import NewsFeed from './widgets/NewsFeed';
import PostUpdate from './widgets/PostUpdate';

const MiddleColumn: React.FC = () => {
  return (
    <div className="space-y-6">
      <PostUpdate />
      <NewsFeed />
    </div>
  );
};

export default MiddleColumn;