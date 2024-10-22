import React from 'react';
import { Plus } from 'lucide-react';

const Boards: React.FC = () => {
  const boards = [
    { id: 1, name: 'Project Planning', color: 'bg-blue-500' },
    { id: 2, name: 'Design Ideas', color: 'bg-green-500' },
    { id: 3, name: 'Task List', color: 'bg-yellow-500' },
  ];

  return (
    <div>
      <div className="space-y-3">
        {boards.map((board) => (
          <div key={board.id} className="flex items-center">
            <div className={`w-4 h-4 rounded-full ${board.color} mr-3`}></div>
            <span className="text-sm text-gray-700">{board.name}</span>
          </div>
        ))}
      </div>
      <button className="mt-4 flex items-center text-blue-500 hover:text-blue-600">
        <Plus size={18} className="mr-1" />
        New Board
      </button>
    </div>
  );
};

export default Boards;