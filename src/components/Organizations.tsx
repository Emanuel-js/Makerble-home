import React from 'react';
import { Building, Plus } from 'lucide-react';

const Organizations: React.FC = () => {
  const organizations = [
    { id: 1, name: 'Tech Innovators', role: 'Member' },
    { id: 2, name: 'Design Guild', role: 'Admin' },
    { id: 3, name: 'Startup Incubator', role: 'Contributor' },
  ];

  return (
    <div>
      <ul className="space-y-3">
        {organizations.map((org) => (
          <li key={org.id} className="flex items-center">
            <Building className="text-gray-400 mr-2" size={20} />
            <div>
              <p className="text-sm font-medium text-gray-800">{org.name}</p>
              <p className="text-xs text-gray-500">{org.role}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-4 flex items-center text-blue-500 hover:text-blue-600">
        <Plus size={18} className="mr-1" />
        New Organization
      </button>
    </div>
  );
};

export default Organizations;