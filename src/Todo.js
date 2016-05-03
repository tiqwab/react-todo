import React from 'react';

class Todo extends React.Component {
  render() {
    const checkBoxName = `checkbox${this.props.todoId}`;
    const checked = this.props.completed === true ? 'checked' : '';

    return (
      <div className="todo">
        <input
          type="checkbox"
          name={checkBoxName}
          className="todo-checkbox"
          checked={checked}
          onChange={this.props.onToggle}
        />
        <div className="todo-label">
          <label htmlFor={checkBoxName}>{this.props.title}</label>
          <button
            className="delete-btn"
            onClick={this.props.deleteTodo}
          >×</button>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  todoId: React.PropTypes.number,
  title: React.PropTypes.string,
  completed: React.PropTypes.bool,
  onToggle: React.PropTypes.func,
  deleteTodo: React.PropTypes.func,
};

export default Todo;
