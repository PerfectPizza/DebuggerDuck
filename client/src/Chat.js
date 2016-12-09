import React, {Component} from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);
  }
  //save to state
   render(){
      // There's not much to this component. Technically, we could probably throw it in the app.js if we wanted to.
      return (
        <div className="chat-window">
      		<ul id="messages">
            {/*this.props.messages.map(message =>
              $('#messages').append('<li>'+message+'</li>');
            )*/}
          </ul>
      		<form action="">
      		  <input id="messageForm" autoComplete="off" /><button onClick={this.sendMessage($('messageForm').val())}>Send</button>
      		</form>
        </div>
      )
   }
   sendMessage(message){
    $('#messages').append('<li>'+message+'</li>');
   }   
};

export default Chat;