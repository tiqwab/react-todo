import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    const todoNodes = this.props.todos.map((x) =>
      <Todo key={x.id} todoId={x.id} title={x.title} completed={x.completed} />
    ).filter((x) => {
      if (this.props.selectedKind === 'ACTIVE') {
        return x.completed !== true;
      } else if (this.props.selectedKind === 'COMPLETED') {
        return x.completed === true;
      }
      return true;
    });

    return (
      <div id="todo-list">
        {todoNodes}
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.array,
  selectedKind: React.PropTypes.string,
};

export default TodoList;
