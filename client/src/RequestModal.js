import React from 'react';

import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

class RequestModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      text:''
    };
    this.orderId = this.props.orderId
    this.receivername = this.props.receivername
  }
  onTextChange(event) {
    this.setState({text: event.target.value});
  }

  sendMessage (orderId, message){
    console.log('order being emittedd: ', orderId, " MEsssage: ", message)
    socket.emit('order', {orderId: orderId, message: this.receivername +": " + message})
  }

  onSubmit (){
    //Don't change this invocation.
    // console.log('modal text?', this.state.text);
    this.sendMessage(this.orderId, this.state.text)
    this.props.changeRole('receiver')
    this.props.onSubmit(this.state.text);
    // this.setState({
    //   isOpen: false,
    //   text: ''
    // });

  }

  openModal (){
    this.setState({
      isOpen: true
    });
  };

  hideModal(){
    this.setState({
      isOpen: false
    });
  };


  render() {
    let subModalDialogStyles = {
      base: {
        bottom: -600,
        transition: 'bottom 0.4s'
      },
      open: {
        bottom: 0
      }
    };
    let {isOpen, isSubOpen} = this.state;

    // console.log("Request Modal Props", this.props)
    return (
        <div className='center orange'>
          <button className="red-button" onClick={this.openModal.bind(this)}>
            Make a request
          </button>

          <Modal isOpen={isOpen} onRequestHide={this.hideModal.bind(this)}>
            <ModalHeader >
              <ModalClose onClick={this.hideModal.bind(this)}/>

            </ModalHeader>
            <div className='modal-inside'>
              <div>
                &nbsp; What would you like? &nbsp;
                <input onChange={this.onTextChange.bind(this)}
                className='modal-input third-input'
                type="text"
                id="text"/>
              </div>
            </div>
            <ModalFooter>
              <button className="red-button" onClick={this.onSubmit.bind(this)}>
                Submit
              </button>
            </ModalFooter>
          </Modal>
        </div>
    );
  }
}

export default RequestModal;
