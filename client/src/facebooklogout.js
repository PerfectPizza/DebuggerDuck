//FacebookLogout.js displays a facebook button
import React, {Component} from 'react';
import axios from 'axios';

class FacebookLogout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //This is only to distinguish between the two buttons.
    	loggedIn: this.props.loggedIn,
      position: this.props.position
    };
  }s

  render(){
        //There are two different facebook buttons. Maybe we could make these two separate components? There's not a lot to them,
        //so I kept them together for and simply sent down some props saying 'bottom' for the second button.
      	return (
      		           <div
             onClick={this.props.logOut}
             className='fb-button'>
             <i className="fa fa-facebook" aria-hidden="true"></i>&nbsp;Log out
           </div>
      		)
	   }
};

export default FacebookLogout;