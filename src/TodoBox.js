import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoSelector from './TodoSelector';

class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: '',
      todos: this.props.todos,
      selectedKind: 'ALL',
    };
    this.onUserInput = this.onUserInput.bind(this);
    this.onUserToggle = this.onUserToggle.bind(this);
    this.onUserSelect = this.onUserSelect.bind(this);
    this.onUserSubmit = this.onUserSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  onUserInput(inputText) {
    this.setState({
      newTodoText: inputText,
    });
  }

  onUserToggle(todoToToggle) {
    this.setState({
      todos: this.state.todos.map((x) => {
        if (x === todoToToggle) {
          const newTodo = {};
          Object.assign(newTodo, x, { completed: !x.completed });
          return newTodo;
        }
        return x;
      }),
    });
  }

  onUserSelect(selectValue) {
    this.setState({
      selectedKind: selectValue,
    });
  }

  onUserSubmit(inputText) {
    const maxId = this.state.todos.reduce((x, y) => ((x > y.id) ? x : y.id), 0);
    this.setState({
      todos: this.state.todos.concat([{
        id: maxId + 1,
        title: inputText,
        completed: false,
      }]),
      newTodoText: '',
    });
  }

  deleteTodo(todo) {
    this.setState({
      todos: this.state.todos.filter(x => x !== todo),
    });
  }

  render() {
    return (
      <div id="todo-box">
        <TodoForm
          newTodoText={this.state.newTodoText}
          onUserInput={this.onUserInput}
          onUserSubmit={this.onUserSubmit}
        />
        <TodoList
          todos={this.state.todos}
          selectedKind={this.state.selectedKind}
          onUserToggle={this.onUserToggle}
          deleteTodo={this.deleteTodo}
        />
        <TodoSelector
          selectedKind={this.state.selectedKind}
          onUserSelect={this.onUserSelect}
        />
      </div>
    );
  }
}

TodoBox.propTypes = {
  todos: React.PropTypes.array,
};

export default TodoBox;
