import React from "react";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const NewsFeed: React.FC = () => {
  const posts = [
    {
      id: 1,
      author: "Amanuel Awol",
      avatar: "https://i.pravatar.cc/150?img=3",
      content:
        "1 by Amanuel Awol working at Harvesting starting at 15:00 on 18th February 2024 on Cereal Farming project for Farming Test",
      timestamp: "Posted 3 days ago",
      likes: 0,
      comments: 0,
    },
    {
      id: 2,
      author: "Amanuel Awol",
      avatar: "https://i.pravatar.cc/150?u=fake@pravatar.com",
      content:
        "1 Event Session Attendance by Amanuel Awol working at Harvest session starting at 05:00 on 17th February 2024 on Cereal Farming project for Farming Test with Farmer number 1, Farmer Number Test",
      timestamp: "Posted 4 days ago",
      likes: 0,
      comments: 0,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex items-center mb-4">
            <img
              src={post.avatar}
              alt={post.author}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold text-gray-800">{post.author}</h3>
              <p className="text-sm text-gray-500">{post.timestamp}</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{post.content}</p>
          <div className="flex items-center space-x-4 text-gray-500">
            <button className="flex items-center hover:text-blue-500 transition duration-300">
              <ThumbsUp size={18} className="mr-1" />
              {post.likes}
            </button>
            <button className="flex items-center hover:text-blue-500 transition duration-300">
              <MessageCircle size={18} className="mr-1" />
              {post.comments}
            </button>
            <button className="flex items-center hover:text-blue-500 transition duration-300">
              <Share2 size={18} className="mr-1" />
              Share
            </button>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Write a comment..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </motion.div>
      ))}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition duration-300"
      >
        Load More
      </motion.button>
    </motion.div>
  );
};

export default NewsFeed;
