import React, { Component } from 'react';
import WorkForm from './WorkForm';
import WorkTable from './WorkTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DATA,
      hours: 0
    }
    this.handleWorkForm = this.handleWorkForm.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  /*
    *handleWorkForm
    *callback function for WorkForm components
    *@param callback - return data from WorkForm
   */
  handleWorkForm(callback) {
    var totalTime= this.state.hours + parseInt(callback.time,10);
    DATA.push(callback)
    this.setState({data : DATA})
    this.setState({hours: totalTime});
    sessionStorage.setItem(callback.id, [callback.id,callback.time,callback.activity,callback.date]);
  }

  /*
    *handleRemove
    *Callback function for WorkTable component and remove item from DATA and sub from hours
    *@param e - return data from WorkTable
   */
  handleRemove(e) {
    var i = -1;
    DATA.forEach((item, index) => {
      if (item.id === e) {
        i = index;
      }
    });
    var totalTime = this.state.hours - DATA[i].time;
    this.setState({hours: totalTime})
    if (i !== -1) {
      DATA.splice(i,1);
      this.setState({data: DATA});
    }
  }

  /*
    *render
    *function to render components
    *@return - Objects to render by the DOM
   */
  render() {
    return (
      <div className="worklog">
        <div className="worklog__main">
          <h1>WorkLog</h1>
          <WorkForm onChangeWorkForm={this.handleWorkForm} />
          <hr/>
          <WorkTable onTableRemove={this.handleRemove} data={this.state.data}/>
          <div className="worklog__footer">
            <h2>{this.state.hours} hours of exercise</h2>
          </div>
        </div>
      </div>
    );
  }
}
var DATA = [

]

export default App;
