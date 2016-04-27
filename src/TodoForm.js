import React from 'react';

class TodoForm extends React.Component {
  render() {
    return (
      <div id="todo-form">
        <input type="text" name="todo-item" />
      </div>
    );
  }
}

export default TodoForm;
