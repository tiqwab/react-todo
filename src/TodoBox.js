import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoSelector from './TodoSelector';

class TodoBox extends React.Component {
  render() {
    return (
      <div id="todo-box">
        <TodoForm />
        <TodoList todos={this.props.todos} />
        <TodoSelector />
      </div>
    );
  }
}

TodoBox.propTypes = {
  todos: React.PropTypes.array,
};

export default TodoBox;
