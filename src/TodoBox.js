import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoSelector from './TodoSelector';

class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: '',
      todos: '',
      selectedKind: 'ALL',
    };
  }

  render() {
    return (
      <div id="todo-box">
        <TodoForm newTodoText={this.state.newTodoText} />
        <TodoList todos={this.props.todos} selectedKind={this.state.selectedKind} />
        <TodoSelector selectedKind={this.state.selectedKind} />
      </div>
    );
  }
}

TodoBox.propTypes = {
  todos: React.PropTypes.array,
};

export default TodoBox;
