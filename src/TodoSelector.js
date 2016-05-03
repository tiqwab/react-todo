import React from 'react';

class TodoSelector extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(e) {
    this.props.onUserSelect(e.target.value.toUpperCase());
  }

  render() {
    // React helps to select option programmatically by `value` attribute of <select>
    return (
      <div id="todo-selector">
        <select
          name="todo-select"
          value={this.props.selectedKind.toLowerCase()}
          onChange={this.onSelect}
        >
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
  onUserSelect: React.PropTypes.func,
};

export default TodoSelector;
