import React from 'react';
import ReactDOM from 'react-dom/client';
import List from './List';

const tasks = {
  1: {
    description: "test",
    taskname: "test",
    status: "test",
    image: "1.jpg"
  },
  2: {
    description: "test",
    taskname: "test",
    status: "test",
    image: "2.jpeg"
  },
  3: {
    description: "test",
    taskname: "test",
    status: "test",
    image: "3.jpg"
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <List tasks={Object.keys(tasks).map(a => ({"id": a, ...tasks[a]}))}/>
  </React.StrictMode>
);
