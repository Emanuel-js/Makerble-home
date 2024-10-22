import React, { useState } from 'react';
import { CheckCircle, Circle, Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'follow up call needed', completed: false },
    { id: 2, title: 'contact the local authority', completed: false },
    { id: 3, title: 'Book in another meeting', completed: false },
    { id: 4, title: 'Speak to the GP about XYZ', completed: false },
    { id: 5, title: 'you need to call her a...', completed: false },
    { id: 6, title: 'Submission deadline', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      toast.success(`Task "${task.title}" ${task.completed ? 'uncompleted' : 'completed'}`);
    }
  };

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      const newTaskItem = { id: Date.now(), title: newTask.trim(), completed: false };
      setTasks([...tasks, newTaskItem]);
      setNewTask('');
      toast.success('New task added!');
    } else {
      toast.error('Please enter a task before adding.');
    }
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
    toast.success('Task removed');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Tasks</h2>
      <form onSubmit={addTask} className="mb-4 flex">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add your next task"
          className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition duration-300"
        >
          <Plus size={20} />
        </button>
      </form>
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center justify-between bg-gray-50 p-2 rounded-md mb-2"
          >
            <div className="flex items-center">
              <button onClick={() => toggleTask(task.id)} className="mr-2 focus:outline-none">
                {task.completed ? (
                  <CheckCircle className="text-green-500" size={20} />
                ) : (
                  <Circle className="text-gray-400" size={20} />
                )}
              </button>
              <span className={`text-sm ${task.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                {task.title}
              </span>
            </div>
            <button onClick={() => removeTask(task.id)} className="text-red-500 hover:text-red-700 focus:outline-none">
              <X size={16} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Tasks;