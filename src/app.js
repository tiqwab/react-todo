import React from 'react';
import ReactDOM from 'react-dom';
import TodoBox from './TodoBox';

const todos = [
  { id: 1, title: 'Something1', completed: false },
  { id: 2, title: 'Something2', completed: true },
  { id: 3, title: 'Something3', completed: false },
];

ReactDOM.render(
  <TodoBox todos={todos} />,
  document.getElementById('app')
);
