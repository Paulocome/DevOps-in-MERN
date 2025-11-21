 import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/api/tasks');
    setTasks(res.data);
  };

  const addTask = async () => {
    const res = await axios.post('http://localhost:5000/api/tasks', { title });
    setTasks([...tasks, res.data]);
    setTitle('');
  };

  const toggleTask = async (task) => {
    const res = await axios.put(`http://localhost:5000/api/tasks/${task._id}`, { completed: !task.completed });
    setTasks(tasks.map(t => t._id === task._id ? res.data : t));
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>To-Do List</h1>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="New task" />
      <button onClick={addTask}>Add</button>
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
