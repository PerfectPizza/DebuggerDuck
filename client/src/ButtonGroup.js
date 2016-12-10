import React, {Component} from 'react';
import Request from './Request.js';

class ButtonGroup extends Component {
  //PROPS: 
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
    <div className="btn-group">
      <button type="button" id="status1" onClick={this.props.changeStatus("I'm on my way to get food")}>I'm OMW to food</button>
      <button type="button" id="status2" onClick={this.props.changeStatus("I'm on my way back with food")}>I'm OMW back</button>
      <button type="button" id="status3" onClick={this.props.changeStatus("I'm back with food")}>I'm back</button>
    </div>
    )
  }

}
export default ButtonGroup;