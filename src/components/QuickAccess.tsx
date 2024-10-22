import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Folder,
  Image,
  Building,
  BarChart2,
  CheckSquare,
  Calendar,
} from "lucide-react";

const QuickAccess: React.FC = () => {
  const items = [
    { icon: Calendar, label: "Events", link: "/events" },
    { icon: Users, label: "Contacts", link: "/contacts" },
    { icon: Folder, label: "Projects", link: "/projects" },
    { icon: Image, label: "Albums", link: "/albums" },
    { icon: Building, label: "Organizations", link: "/organizations" },
    { icon: BarChart2, label: "Progress", link: "/progress" },
    { icon: CheckSquare, label: "Tasks", link: "/tasks" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Access</h2>
      <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
        {items.map((item, index) => (
          <motion.a
            key={item.label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            href={item.link}
          >
            <item.icon size={24} className="text-blue-500 mb-2" />
            <span className="text-sm text-gray-700">{item.label}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default QuickAccess;
