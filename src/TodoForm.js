import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.props.onUserInput(
      this.refs.todoTextInput.value
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onUserSubmit(
      this.refs.todoTextInput.value
    );
  }

  render() {
    return (
      <div id="todo-form">
        <form action="#" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo-item"
            value={this.props.newTodoText}
            ref="todoTextInput"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

TodoForm.propTypes = {
  newTodoText: React.PropTypes.string,
  onUserInput: React.PropTypes.func,
  onUserSubmit: React.PropTypes.func,
};

export default TodoForm;
