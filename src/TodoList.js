import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  onUserToggle(todo) {
    this.props.onUserToggle(todo);
  }

  render() {
    const todoNodes = this.props.todos.map((x) => {
      const onToggle = this.onUserToggle.bind(this, x);
      return (
        <Todo
          key={x.id}
          todoId={x.id}
          title={x.title}
          completed={x.completed}
          onToggle={onToggle}
        />
      );
    }).filter((x) => {
      if (this.props.selectedKind === 'ACTIVE') {
        return x.props.completed === false;
      } else if (this.props.selectedKind === 'COMPLETED') {
        return x.props.completed === true;
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
  onUserToggle: React.PropTypes.func,
};

export default TodoList;
