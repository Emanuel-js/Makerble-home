import React from 'react';
import { User, Plus } from 'lucide-react';

const Contacts: React.FC = () => {
  const contacts = [
    { id: 1, name: 'Alice Johnson', role: 'Designer' },
    { id: 2, name: 'Bob Smith', role: 'Developer' },
    { id: 3, name: 'Charlie Brown', role: 'Manager' },
  ];

  return (
    <div>
      <ul className="space-y-3">
        {contacts.map((contact) => (
          <li key={contact.id} className="flex items-center">
            <User className="text-gray-400 mr-2" size={20} />
            <div>
              <p className="text-sm font-medium text-gray-800">{contact.name}</p>
              <p className="text-xs text-gray-500">{contact.role}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-4 flex items-center text-blue-500 hover:text-blue-600">
        <Plus size={18} className="mr-1" />
        New Contact
      </button>
    </div>
  );
};

export default Contacts;