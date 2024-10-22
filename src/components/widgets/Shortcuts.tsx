import React from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface ShortcutItem {
  id: number;
  name: string;
  avatar?: string;
  color?: string;
  thumbnail?: string;
  icon?: string;
}

interface ShortcutsProps {
  title: string;
  items: ShortcutItem[];
}

const Shortcuts: React.FC<ShortcutsProps> = ({ title, items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            {item.avatar && (
              <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full mb-2" />
            )}
            {item.color && (
              <div className={`w-12 h-12 rounded-full ${item.color} mb-2`}></div>
            )}
            {item.thumbnail && (
              <img src={item.thumbnail} alt={item.name} className="w-12 h-12 rounded-lg mb-2 object-cover" />
            )}
            {item.icon && (
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-2 text-2xl">
                {item.icon}
              </div>
            )}
            <span className="text-sm text-gray-700 text-center">{item.name}</span>
          </motion.div>
        ))}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center justify-center"
        >
          <button className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-2 hover:bg-gray-300 transition duration-300">
            <Plus size={24} className="text-gray-600" />
          </button>
          <span className="text-sm text-gray-700">Add New</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Shortcuts;