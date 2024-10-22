import React from 'react';

const PersonalProgress: React.FC = () => {
  const progressItems = [
    { id: 1, label: 'Projects Completed', value: 75, color: 'bg-blue-500' },
    { id: 2, label: 'Tasks Finished', value: 60, color: 'bg-green-500' },
    { id: 3, label: 'Goals Achieved', value: 40, color: 'bg-yellow-500' },
  ];

  return (
    <div className="space-y-4">
      {progressItems.map((item) => (
        <div key={item.id}>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">{item.label}</span>
            <span className="text-sm font-medium text-gray-700">{item.value}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full ${item.color}`}
              style={{ width: `${item.value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalProgress;