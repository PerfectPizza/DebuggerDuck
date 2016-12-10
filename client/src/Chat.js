import React, {Component} from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var username=this.props.username

    $('#chatSubmit').click(()=>{
      let msg = $('#messageForm').val()
      socket.emit('chat', {message: msg, orderId: 34 /*!!!!! REPLACE WITH this.props.orderId */})
      $('#messageForm').val('')
      return false;
    })

    socket.on('chat' + 34 /*!!! REPLACE WITH this.props.orderId */, function(msg) {
      $('#messages').append($('<li class=chat-message>').text(username+": " +msg))
    })
  }

  //save to state
   render(){
      // There's not much to this component. Technically, we could probably throw it in the app.js if we wanted to.
      return (
        <div>
          <div className="chat-window">
        		<ul id="messages" className="chat-messages">
              {/*this.props.messages.map(message =>
                $('#messages').append('<li>'+message+'</li>');
              )*/}
            </ul>
          </div>
        	<form action="" className="chat-form">
        	  <input id="messageForm" autoComplete="off" /><button className="chat-button"id="chatSubmit">Send</button>
        	</form>
        </div>
      )
   }

};

export default Chat;