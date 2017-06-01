import React, { Component } from 'react';
import WorkTableItem from './WorkTableItem';
var rows = [];
class WorkTable extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveTable = this.handleRemoveTable.bind(this);
  }
  /*
    *componentWillMount
    *set necessary variables before rendering the components
   */
  componentWillMount() {
    this.setState({ data: this.props.data});
  }
  /*
    *handleRemoveTable
    *Callback function for WorkTableItem component, and remove item on sessionStorage
    *@param e - id from the line who need to be removed
   */
  handleRemoveTable(e) {
    sessionStorage.removeItem(e);
    this.props.onTableRemove(e);
  }

  /*
    * componentWillReceiveProps
    * update component when props are updated
   */
  componentWillReceiveProps(){
    rows = [];
    this.props.data.forEach((item) => {
      rows.push(<WorkTableItem onRemoveChange={this.handleRemoveTable} id={item.id} time={item.time} activity={item.activity} date={item.date} key={item.id}/>)
    });
  }

  render() {
    return (
      <div className="work-table">
        <div className="work-table__table">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Time Spent</th>
                <th>Activity</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default WorkTable;
