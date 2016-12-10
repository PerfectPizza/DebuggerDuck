import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Request is pretty simple. It's parent component (request) does all the work for it and funnels down all the info it needs
//through the props.
class Request extends Component {
	constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return ( 
      <div className='individual-request'>
      {this.props.request.text} - {this.props.request.user_id}
     <img className='small-profile-pic' src={this.props.request.picture}/>
     </div>
    );
  }  
  
};

export default Request;