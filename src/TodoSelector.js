import React from 'react';

class TodoSelector extends React.Component {
  render() {
    return (
      <div id="todo-selector">
        <select name="todo-select">
          <option value="all">ALL</option>
          <option value="active">ACTIVE</option>
          <option value="completed">COMPLETED</option>
        </select>
      </div>
    );
  }
}

export default TodoSelector;
