import React from 'react';

import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

class VolunteerModal extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isOpen: false,
      time: '',
      location: '',
    };
  }
    onTimeChange(event) {
    //every time the user types a new letter, the state is changed to the current input
    this.setState({time: event.target.value});
  }
  onLocationChange(event) {
    //every time the user types a new letter, the state is changed to the current input
    this.setState({location: event.target.value});
  }
  
  onSubmit (){
    this.props.postVolunteer(this.state.location, this.state.time, this.props.currentGroup);
    console.log("On submit at the modal level")
    this.props.onSubmit();
    this.props.getDataForRendering();
    this.props.changeRole('fetcher');
    this.setState({
      isOpen: false,
      time: '',
      location: '',
    });
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
        <div className='center'>
          <button className="red-button" onClick={this.openModal.bind(this)}>
            Volunteer your services
          </button>

          <Modal isOpen={isOpen} onRequestHide={this.hideModal.bind(this)}>
            <ModalHeader >
              <ModalClose onClick={this.hideModal.bind(this)}/>
              
            </ModalHeader>
            <div className='modal-inside'>
              <div>
                &nbsp; Where are you going? &nbsp;
                <input 
                onChange={this.onLocationChange.bind(this)} 
                className='modal-input' 
                type="text" 
                id="location"/>
              </div>
              <div>
                &nbsp; What time? &nbsp;
                <input 
                onChange={this.onTimeChange.bind(this)} 
                className='modal-input second-input' 
                type="text" 
                id="time"/>
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

export default VolunteerModal;