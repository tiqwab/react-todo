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
        <label htmlFor={checkBoxName}>{this.props.title}</label>
      </div>
    );
  }
}

Todo.propTypes = {
  todoId: React.PropTypes.number,
  title: React.PropTypes.string,
  completed: React.PropTypes.bool,
  onToggle: React.PropTypes.func,
};

export default Todo;
