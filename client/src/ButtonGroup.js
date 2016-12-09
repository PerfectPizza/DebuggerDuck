import React, {Component} from 'react';
import Request from './Request.js';

class ButtonGroup extends Component {
  //PROPS: 
  constructor(props) {
    super(props);
  }
  
  render() {
    if(this.props.role === 'fetcher' ){

    return (
    <div className="btn-group">
      <button type="button" className="btn btn-left" onClick={props.changeStatus("I'm on my way to get food") /*SOCKET STUFF TO TELL RECEIVERS*/}>I'm OMW to food</button>
      <button type="button" className="btn btn-wayback" onClick={props.changeStatus("I'm on my way back with food")}>I'm OMW back</button>
      <button type="button" className="btn btn-arrived" onClick={props.changeStatus("I'm back with food")}>I'm back</button>
    </div>
    )
  } else {
    return (
      <div>Your order  here</div>
    )
  }
   
  };
}

export default ButtonGroup;