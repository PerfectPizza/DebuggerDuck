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
      text:'',
    };
  }
  onTextChange(event) {
    //every time the user types a new letter, the state is changed to the current input
    this.setState({text: event.target.value});
  }

  onSubmit (){
    this.setState({
      isOpen: false
    });
    this.props.postGroup(this.state.text);
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
    return (
        <div>
          Don't see any groups you like? Why not ...
          <button className="red-button" onClick={this.openModal.bind(this)}>
            Create a new group
          </button>

          <Modal isOpen={isOpen} onRequestHide={this.hideModal.bind(this)}>
            <ModalHeader >
              <ModalClose onClick={this.hideModal.bind(this)}/>

            </ModalHeader>
            <div className='modal-inside'>
              <div>
                &nbsp; Name your group. &nbsp;
                <input
                onChange={this.onTextChange.bind(this)}
                className='modal-input third-input'
                type="text"
                id="group-name"/>
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
