import React from 'react';
import { motion } from 'framer-motion';

const ProgressBars: React.FC = () => {
  const progressItems = [
    { id: 1, label: 'Are either of your parents living?', value: 100, color: 'bg-orange-500' },
    { id: 2, label: 'Do you belong to any groups in which you are a minority?', value: 50, color: 'bg-blue-500' },
    { id: 3, label: '1-2-1 Events', value: 33, color: 'bg-pink-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Progress</h2>
      <div className="space-y-4">
        {progressItems.map((item, index) => (
          <div key={item.id}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
              <span className="text-sm font-medium text-gray-700">{item.value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ delay: index * 0.2, duration: 1, ease: "easeOut" }}
                className={`h-2.5 rounded-full ${item.color}`}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Go to board
      </motion.button>
    </motion.div>
  );
};

export default ProgressBars;