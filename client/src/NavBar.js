
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FacebookButton from './FacebookButton.js'



class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      //I have not yet done anything with the karma besides hard code it as 0 and display it.
      //This needs to be worked on.
      karma: 0
    };
  }

  //Note: Navbar does not rerender when the app renders. How can we change this??
  
  //Note: All this does is toggle loggedIn back and forth so I don't have to manually change App.js's state. 
  //Once we get OAUTH up, this button functionality will need to change.
  
  //login and logOut invoke the functions passed from App.
  login() {
  	this.setState({loggedIn: true});
    console.log('Logout triggered from Navbar');
    this.props.postLogin();
	 }
  //logout updates local state and runs postLogout, inherited from App. 
  logOut() {
    this.setState({loggedIn: false})
    this.props.postLogout();
  }
  render() { 
  		return ( 
    	<div className='nav-bar'>
    		<FacebookButton 
          logOut={this.logOut.bind(this)} 
          loggedIn={this.state.loggedIn}/>
    		<div className='karma'>Karma: {this.state.karma}</div>
        <img className='nav-pic' src={this.props.picture}/>
        <div className='username'>{this.props.username} </div>
    	</div>
  		);
  	}
};


export default NavBar;