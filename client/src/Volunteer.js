//This component is the child component of volunteerRequestContainer.js and the parent of request.js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Request from './Request.js';
import RequestModal from './RequestModal.js';

class Volunteer extends Component {
  constructor(props) {
    super(props);
    // console.log("Volunteer Props: ", props)
    this.state = {
      //This info has been funneled down from volunteerRequestContainer, which was funneled down from app.js
      username: this.props.username,
      picture: this.props.picture,
      //we set text as '' because nothing has been entered yet.
      text:'',
      //requests is an array of stuff obtained from the database.
      //It can be added to by the user by typing into the inputs and submitting.
      requests:this.props.volunteer.requests,
      count:0
    };
  }
  onTextChange(event) {
    //every time the user types a new letter, the state is changed to the current input
    this.setState({text: event.target.value});
  }
  //Run postRequest to send request data to the server.
  //update text state to reset box.
  //run getDataforRendering to update App (somewhat ugly, last-minute hack).
  //update existing requests with new data from props.
  onSubmit(text){
    console.log("OrderID", this.props.volunteer.orderId);
    console.log("onSUBMIT PROPS:", this.props)
    this.props.postRequest(
      this.props.orderId,
      text,
      this.props.volunteer.order_user,
      this.props.volunteer.picture,
      this.props.volunteer.time,
      this.props.volunteer.location
    );
    this.setState({text:''});
    this.props.getDataForRendering();
    this.setState({requests:this.props.volunteer.requests})
  }


  render() {
    return (
        <div className='volunteer-div'>
          <img className='small-profile-pic' src={this.props.volunteer.picture}/>
          {this.props.volunteer.order_user} is going to {this.props.volunteer.location} at {this.props.volunteer.time}.

        {this.state.requests.map(request =>
          //this goes through the array of requests and maps them using the child component, Request.js
          <Request
          //I threw math.random as the key because react kept getting angry at me for making duplicate keys??
            key= {Math.random()}
            request={request}/>
          )}
           <RequestModal orderNumber={this.props.orderNumber} changeRole={this.props.changeRole} onSubmit={this.onSubmit.bind(this)}/>
        </div>
  );
 }

};

export default Volunteer;
