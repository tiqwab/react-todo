import React from 'react';

class Todo extends React.Component {
  render() {
    const checkBoxName = `checkbox${this.props.key}`;
    const checked = this.props.completed === true ? 'checked' : '';

    return (
      <div className="todo">
        <input type="checkbox" name={checkBoxName} className="todo-checkbox" checked={checked} />
        <label htmlFor={checkBoxName}>{this.props.title}</label>
      </div>
    );
  }
}

Todo.propTypes = {
  key: React.PropTypes.number,
  title: React.PropTypes.string,
  completed: React.PropTypes.bool,
};

export default Todo;
