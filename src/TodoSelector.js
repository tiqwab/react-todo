import React from 'react';

class TodoSelector extends React.Component {
  render() {
    // React helps to select option programmatically by `value` attribute of <select>
    return (
      <div id="todo-selector">
        <select name="todo-select" value={this.props.selectedKind}>
          <option value="all">ALL</option>
          <option value="active">ACTIVE</option>
          <option value="completed">COMPLETED</option>
        </select>
      </div>
    );
  }
}

TodoSelector.propTypes = {
  selectedKind: React.PropTypes.string,
};

export default TodoSelector;
