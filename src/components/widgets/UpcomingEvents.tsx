import React from "react";
import { Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const UpcomingEvents: React.FC = () => {
  const events = [
    {
      id: 1,
      title: "Youth panel",
      date: "15:00 02/10/24 - 15:30 02/10/24",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Digital Inclusion Event",
      date: "10:00 06/10/24 - 15:00 06/10/24",
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Youth",
      date: "15:00 02/10/24 - 15:30 02/10/24",
      color: "bg-yellow-500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
        <Calendar className="mr-2" size={24} />
        Upcoming Events
      </h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            <div className={`w-3 h-3 rounded-full ${event.color} mr-3`}></div>
            <div className="flex-grow">
              <h3 className="font-medium text-gray-800">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.date}</p>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </motion.div>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        View All Events
      </motion.button>
    </motion.div>
  );
};

export default UpcomingEvents;
