import React, { Component } from 'react';

class WorkTableItem extends Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }

  /*
    *removeItem
    *send the line id to parent using props callback
   */
  removeItem() {
    this.props.onRemoveChange(this.props.id);
  }
  render() {
    return (
      <tr className="table__line">
        <td>{this.props.id}</td>
        <td>{this.props.time}</td>
        <td>{this.props.activity}</td>
        <td>{this.props.date}</td>
        <td>
          <button className="button--delete" onClick={this.removeItem}>
            Remove
          </button>
        </td>
      </tr>
    );
  }
}

export default WorkTableItem;
