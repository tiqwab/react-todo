import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(
      this.refs.todoTextInput.value
    );
  }

  render() {
    return (
      <div id="todo-form">
        <input
          type="text"
          name="todo-item"
          value={this.props.newTodoText}
          ref="todoTextInput"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

TodoForm.propTypes = {
  newTodoText: React.PropTypes.string,
  onUserInput: React.PropTypes.func,
};

export default TodoForm;
