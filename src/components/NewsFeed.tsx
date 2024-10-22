import React from 'react';
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

const NewsFeed: React.FC = () => {
  const posts = [
    {
      id: 1,
      author: 'John Doe',
      content: 'Just finished an amazing project! Can\'t wait to share it with everyone.',
      timestamp: '2 hours ago',
      likes: 15,
      comments: 3,
    },
    {
      id: 2,
      author: 'Jane Smith',
      content: 'Looking for collaborators on a new web app idea. Anyone interested?',
      timestamp: '5 hours ago',
      likes: 8,
      comments: 7,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">News Feed</h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
            <div className="flex items-center mb-3">
              <img
                src={`https://source.unsplash.com/random/40x40?face&${post.id}`}
                alt={post.author}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{post.author}</h3>
                <p className="text-sm text-gray-500">{post.timestamp}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3">{post.content}</p>
            <div className="flex items-center space-x-4 text-gray-500">
              <button className="flex items-center hover:text-blue-500">
                <ThumbsUp size={18} className="mr-1" />
                {post.likes}
              </button>
              <button className="flex items-center hover:text-blue-500">
                <MessageCircle size={18} className="mr-1" />
                {post.comments}
              </button>
              <button className="flex items-center hover:text-blue-500">
                <Share2 size={18} className="mr-1" />
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;