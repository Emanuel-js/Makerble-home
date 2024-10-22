import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface UserGuideProps {
  onClose: () => void;
}

const UserGuide: React.FC<UserGuideProps> = ({ onClose }) => {
  const steps = [
    { title: 'Quick Access', description: 'Use these buttons to quickly navigate to different sections.' },
    { title: 'Upcoming Events', description: 'View and manage your upcoming events here.' },
    { title: 'Shortcuts', description: 'Access your frequently used contacts, projects, and albums.' },
    { title: 'Post Updates', description: 'Share updates with your network from this section.' },
    { title: 'News Feed', description: 'Stay updated with the latest posts from your network.' },
    { title: 'Progress Board', description: 'Track your personal progress and achievements.' },
    { title: 'Tasks', description: 'Manage your to-do list and stay organized.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Welcome to Your Dashboard!</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <p className="text-gray-600 mb-6">Here's a quick guide to help you get started:</p>
        <ul className="space-y-4">
          {steps.map((step, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-8 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Got it, let's go!
        </button>
      </motion.div>
    </motion.div>
  );
};

export default UserGuide;