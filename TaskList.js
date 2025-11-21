import React from 'react';

const TaskList = ({ tasks, toggleTask, deleteTask }) => (
  <ul>
    {tasks.map(task => (
      <li key={task._id} style={{ marginBottom: '10px' }}>
        <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task)} />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none', marginLeft: '10px' }}>
          {task.title}
        </span>
        <button onClick={() => deleteTask(task._id)} style={{ marginLeft: '10px' }}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TaskList;
