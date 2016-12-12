import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Request from './Request.js';
import Chat from './Chat.js';
import Progress from './Progress.js';
import ButtonGroup from './ButtonGroup.js';

  class StatusView extends Component {
    constructor(props) {
      super(props);
      console.log("StatusViewProps: ", props)
      this.state = {
    	  orderStatus: 'open'
      }
      this.orderId = props.orderId;
      this.picture = props.picture;
      console.log(props.picture)
    }

  confirmClose () {
    var confirm = prompt("you closed the order. are you sure? Yes or No");
    var responsesYes = ["yes", "y", "ye"];
    var responsesNo = ["no", "n"]
    if(responsesYes.includes(confirm) ){
      return "yes";
    } else if (responsesNo.includes(confirm) ){
      console.log("confirm was confirmed with " + confirm);
      return "no";
    } else {
      confirmClose();
    }
  }

  closeOrder() {
    var confrimClose = confirmClose()
    if(confrimClose==="yes"){
      console.log("confirm was confirmed with " + confirmClose);
    } else if (confrimClose==="no"){
      console.log("confirm was confirmed with " + confirmClose)
    }
  }

  changeStatus(status){
    this.setState({order_progress: status});
  }

  saveMessages(messages){
    this.setState({messages: messages});
  }

  componentDidMount(){
    socket.on('order'+this.orderId, function(order){
      $('.SV-orders-list').append($('<li>').text(order))
      console.log('order message for order' + this.props.orderId+ '   Message: ', orderMessage)
    })

  }

  render() {
    console.log("StatusView OrderID", this.props.orderId)
    console.log("StatusView OrderUser", this.props.orderUser)
    console.log("StatusView time", this.props.time)
    console.log("StatusView location", this.props.location)
    if(this.props.role === 'fetcher'){
      return (
        <div className='volunteer-div'>
          <img className='small-profile-pic' src={this.picture}/>
          <span>Thanks for running to {this.props.location}!</span>
          <button className="exit" onClick={() => {this.props.changeRole(null)}}>X</button>
          <Progress status={this.state.orderStatus} orderId={this.props.orderId}/>
          <Chat 
            orderId={this.props.orderId}
            username={this.props.username}
            messages={this.state.messages} 
            saveMessages={this.saveMessages.bind(this)}
          />
          <div className="SV-orders-container">
          <ul className="ordersGoHere">Orders:</ul>
          <ul id="SV-orders-list">
          </ul>
          </div>
          <ButtonGroup orderId={this.props.orderId} changeStatus={this.changeStatus.bind(this)}/>
        </div>
      );
    } else if(this.props.role === 'receiver'){
 	  return (
        <div className='volunteer-div'>
          <img className='small-profile-pic' src={this.picture}/>
          <span id="order">Your Order from {this.props.location}: {this.props.text}</span>
          <Progress status={this.state.orderStatus} orderId={this.props.orderId}/>
          <button className="exit" onClick={() => {this.props.changeRole(null)}}>X</button>
          <Chat
            orderId={this.props.orderId}
            username={this.props.username}
            messages={this.state.messages}
            saveMessages={this.saveMessages.bind(this)}
          />
        </div>
  	  );
    } else if(this.props.role === 'undefined'){
      return (
        <p>You didn't set your props correctly</p>
      )
    }
 }

};

export default StatusView;
