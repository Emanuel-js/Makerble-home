import React from 'react';
import { Folder, Plus } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    { id: 1, name: 'Website Redesign', status: 'In Progress' },
    { id: 2, name: 'Mobile App Development', status: 'Planning' },
    { id: 3, name: 'Marketing Campaign', status: 'Completed' },
  ];

  return (
    <div>
      <ul className="space-y-3">
        {projects.map((project) => (
          <li key={project.id} className="flex items-center">
            <Folder className="text-gray-400 mr-2" size={20} />
            <div>
              <p className="text-sm font-medium text-gray-800">{project.name}</p>
              <p className="text-xs text-gray-500">{project.status}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-4 flex items-center text-blue-500 hover:text-blue-600">
        <Plus size={18} className="mr-1" />
        New Project
      </button>
    </div>
  );
};

export default Projects;