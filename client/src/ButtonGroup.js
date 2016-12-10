import React, {Component} from 'react';
import Request from './Request.js';

class ButtonGroup extends Component {
  //PROPS: 
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let orderId = this.props.orderId
    $('.statusButton').click((e)=>{
      socket.emit('status', {orderId:orderId, status:e.target.value})
    })
  }
  
  render() {
    return (
    <div className="btn-group">
      <button type="button" className="statusButton" value="Fetcher Departed" onClick={this.props.changeStatus("I'm on my way to get food")}>Getting NOMS</button>
      <button type="button" className="statusButton" value="Fetcher Returning" onClick={this.props.changeStatus("I'm on my way back with food")}>Returning with NOMS</button>
      <button type="button" className="statusButton"value="Food Arrived" onClick={this.props.changeStatus("I'm back with food")}>I'm back (with NOMS)</button>
    </div>
    )
  }

}
export default ButtonGroup;