import React from 'react';
import { Home, Users, Folder, Image, ChevronRight, Calendar, Building, ChartBar, CheckSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { icon: Home, label: 'Home' },
    { icon: Calendar, label: 'Events' },
    { icon: Users, label: 'Contacts' },
    { icon: Folder, label: 'Projects' },
    { icon: Image, label: 'Albums' },
    { icon: Building, label: 'Organizations' },
    { icon: ChartBar, label: 'Progress' },
    { icon: CheckSquare, label: 'Tasks' },
  ];

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: isOpen ? 0 : '-100%' }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50"
    >
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Makerble</h2>
        <nav>
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a href="#" className="flex items-center text-gray-600 hover:text-blue-500 transition duration-300">
                  <item.icon className="mr-3" size={20} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 -right-10 bg-white rounded-r-full p-2 text-gray-500 hover:text-gray-800"
      >
        <ChevronRight size={24} />
      </button>
    </motion.div>
  );
};

export default Sidebar;