import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Request from './Request.js';
import Chat from './Chat.js';
import Progress from './Progress.js';
import ButtonGroup from './ButtonGroup.js';
// import RequestModal from './RequestModal.js';

//EXPECTATIONS FROM OUTSIDE OF THIS COMPONENT:
  //props:
    //requests
    //role
    //messages?
    //order ID
  //STATE CHANGE: 
    //order_progress --> ButtonGroup
    //messages?

  class StatusView extends Component {
    constructor(props) {
      super(props);
      console.log("StatusViewProps: ", props)
      this.state = {
    	orderStatus: 'open'
    }
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

  render() {
    if(this.props.role === 'fetcher'){
      return (
        <div className='volunteer-div'>
          <img className='small-profile-pic' src={this.props.picture}/>
          <Progress status={this.state.orderStatus} />
          <Chat messages={this.state.messages} saveMessages={this.saveMessages.bind(this)}/>
          <ButtonGroup changeStatus={this.changeStatus.bind(this)}/>  
        </div>
      );
    } else if(this.props.role === 'receiver'){
 	  return (
        <div className='volunteer-div'>
          <img className='small-profile-pic' src={this.props.picture}/>
          {'Ari' + 'is' || 'you are'}  going to Chipotle.
          <Progress status={this.state.orderStatus}/> 
          <Chat messages={this.state.messages} saveMessages={this.saveMessages.bind(this)}/>
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