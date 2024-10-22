import React, { useState } from 'react';
import { Image, Video, Paperclip, Smile } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const PostUpdate: React.FC = () => {
  const [post, setPost] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (post.trim()) {
      console.log('Posting update:', post);
      toast.success('Your update has been posted!');
      setPost('');
    } else {
      toast.error('Please enter some content before posting.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          placeholder="What's on your mind?"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="text-gray-500 hover:text-blue-500 transition duration-300"
            >
              <Image size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="text-gray-500 hover:text-blue-500 transition duration-300"
            >
              <Video size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="text-gray-500 hover:text-blue-500 transition duration-300"
            >
              <Paperclip size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="text-gray-500 hover:text-blue-500 transition duration-300"
            >
              <Smile size={20} />
            </motion.button>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Post Update
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default PostUpdate;