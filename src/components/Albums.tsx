import React from 'react';
import { Image, Plus } from 'lucide-react';

const Albums: React.FC = () => {
  const albums = [
    { id: 1, name: 'Vacation Photos', count: 120 },
    { id: 2, name: 'Work Events', count: 45 },
    { id: 3, name: 'Family Gatherings', count: 78 },
  ];

  return (
    <div>
      <ul className="space-y-3">
        {albums.map((album) => (
          <li key={album.id} className="flex items-center">
            <Image className="text-gray-400 mr-2" size={20} />
            <div>
              <p className="text-sm font-medium text-gray-800">{album.name}</p>
              <p className="text-xs text-gray-500">{album.count} photos</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-4 flex items-center text-blue-500 hover:text-blue-600">
        <Plus size={18} className="mr-1" />
        New Album
      </button>
    </div>
  );
};

export default Albums;