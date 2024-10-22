import React from 'react';
import { CheckCircle, Circle, Plus } from 'lucide-react';

const Tasks: React.FC = () => {
  const tasks = [
    { id: 1, title: 'Finish project proposal', completed: true },
    { id: 2, title: 'Review design mockups', completed: false },
    { id: 3, title: 'Schedule team meeting', completed: false },
    { id: 4, title: 'Update documentation', completed: false },
  ];

  return (
    <div>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center">
            {task.completed ? (
              <CheckCircle className="text-green-500 mr-2" size={20} />
            ) : (
              <Circle className="text-gray-300 mr-2" size={20} />
            )}
            <span className={`text-sm text-gray-700 ${task.completed ? 'line-through' : ''}`}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
      <button className="mt-4 flex items-center text-blue-500 hover:text-blue-600">
        <Plus size={18} className="mr-1" />
        Add Task
      </button>
    </div>
  );
};

export default Tasks;