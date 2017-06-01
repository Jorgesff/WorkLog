import React, { Component } from 'react';
class WorkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      time: "",
      activity: "",
      date: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.lastId = this.lastId.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /*
    * lastId
    * get the last id on the line
    * @return last - return the next id avaiable
   */
  lastId() {
    var last = this.state.count;
    this.setState({count : last+1});
    return last;
  }

  /*
    *handleChange
    *handle with the input changes and set their respectives states
    *@param field - event throw by the inputs
   */
  handleChange(field) {
    var state = field.target.value;
    var name = field.target.name;
    switch (name) {
      case 'time':
        this.setState({time: state});
        break;
      case 'activity':
        this.setState({activity: state});
        break;
      case 'date':
        this.setState({date: state});
        break;
      default:
    }
  }
  /*
    *handleSubmit
    *deal with the form submit event and send the callback to parent.
    *@param event - event throw by the form
   */
  handleSubmit(event) {
    event.preventDefault();
    var id = this.lastId();
    this.props.onChangeWorkForm(
      {
        id: id,
        time: this.state.time,
        date: this.state.date,
        activity: this.state.activity
      });
      this.setState({time: ''});
      this.setState({activity: ""});
      this.setState({date: ""});

  }
  render() {
    return (
      <div className="work-form">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend className="form-control--legend">Insert an Item</legend>
            <div className="work-form--left">
              <input
                type="number"
                name="time"
                value={this.state.time}
                onChange={this.handleChange}
                className="form-control form-control--text"
                placeholder="Time spent"
                min="1"
                max="24"
                required
              />
              hrs

              <select
                name="activity"
                value={this.state.activity}
                onChange={this.handleChange}
                className="form-control form-control--select"
                required
              >
                <option value="" disabled>Activity</option>
                <option value="run">Run</option>
                <option value="swimming">Swimming</option>
                <option value="bike">Bike</option>
              </select>
            </div>
            <div className="work-form--right">
              <input
                type="date"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
                className="form-control form-control--date"
                required
              />
              <button type="submit" className="button--submit">ADD</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
export default WorkForm;
