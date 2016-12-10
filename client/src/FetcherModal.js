import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

class FetcherModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        requests: null
      }
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
        <div className='center orange'>
          <button className="red-button" onClick={this.openModal.bind(this)}>
            see orders
          </button>

          <Modal isOpen={isOpen} onRequestHide={this.hideModal.bind(this)}>
            <ModalHeader >
              <ModalClose onClick={this.hideModal.bind(this)}/>
            </ModalHeader>
            <div className='modal-inside'>
              {this.props.requests.map(request =>
                //this goes through the array of requests and maps them using the child component, Request.js
                <Request
                //I threw math.random as the key because react kept getting angry at me for making duplicate keys??
                  key= {Math.random()}
                  request={request}
                />
              )}
            </div>
            <ModalFooter>
              <button className="red-button" onClick={this.hideModal.bind(this)}>
              </button>
            </ModalFooter>
          </Modal>
        </div>
    );



