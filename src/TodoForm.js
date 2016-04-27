import React from 'react';

class TodoForm extends React.Component {
  render() {
    return (
      <div id="todo-form">
        <input type="text" name="todo-item" value={this.props.newTodoText} />
      </div>
    );
  }
}

TodoForm.propTypes = {
  newTodoText: React.PropTypes.string,
};

export default TodoForm;
