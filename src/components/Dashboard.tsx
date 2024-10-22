import React, { useState } from 'react';
import LeftColumn from './LeftColumn';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';
import QuickAccess from './QuickAccess';
import UserGuide from './UserGuide';

const Dashboard: React.FC = () => {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, Yael!</h1>
        <button
          onClick={() => setShowGuide(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Show Guide
        </button>
      </div>
      <QuickAccess />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </div>
      {showGuide && <UserGuide onClose={() => setShowGuide(false)} />}
    </div>
  );
};

export default Dashboard;