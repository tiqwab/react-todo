import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    const todoNodes = this.props.todos.map((x) =>
      <Todo key={x.id} title={x.title} completed={x.completed} />
    );

    return (
      <div id="todo-list">
        {todoNodes}
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.array,
};

export default TodoList;
