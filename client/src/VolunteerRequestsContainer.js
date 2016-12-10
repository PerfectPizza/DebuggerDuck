import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Volunteer from './Volunteer';
import VolunteerModal from './VolunteerModal'

//This is a child component of app.js and the parent of volunteer.js (and therefore a grandparent(?) of request.js)
class VolunteerRequestContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //this info was funneled down from app.js
      username: props.username,
      picture: props.picture,
      volunteers: props.currentData,
    };

  }
  
  render() {
    //Because this.state.volunteers holds ALL the info for all groups and we only want to render the info relevent to the group,
    //We create a variable called filteredVolunteers. Because the database needs the id of the group but we only hold
    // the groups name, we had to pass down a function called getIdFromGroupName that returns the id.
    //Once we have the id, we can use that information to filter through this.state.volunteers to only display the
    //info from that particular group.
    let filteredVolunteers=this.state.volunteers.filter(volunteer => volunteer.group_id === this.props.getIdFromGroupName(this.props.currentGroup));
    //Here we check if no one has volunteered yet. If so, we render a div that tells the user that no one has volunteered yet.
    //If they do volunteer, this.state.volunteer will change and the page will render immediately and will display their info.
    if (filteredVolunteers.length===0){
      return(
        <div> 
          <div>
            <VolunteerModal getDataForRendering={this.getDataForRendering.bind(this)} getCurrentData={this.props.getCurrentData} currentGroup={this.props.currentGroup} onSubmit={this.onSubmit.bind(this)} postVolunteer={this.props.postVolunteer} />
          </div>
          <div className='no-requests center'>No one has volunteered to grab food yet. Why don't you go first?</div>
          <div className='center'><button className='red-button new-group' onClick={this.props.selectDifferentGroup}>Select a different group</button></div>
        </div>
        )
    } else {
      //If there are already volunteers in the system for this particular group, render them.
      return ( 
        //VolunteerModal pops up when you click the Volunteer Services button
     <div className='request-container'>
        <div>
          <VolunteerModal changeRole={this.props.changeRole} getDataForRendering={this.getDataForRendering.bind(this)} getCurrentData={this.props.getCurrentData} currentGroup={this.props.currentGroup} onSubmit={this.onSubmit.bind(this)} postVolunteer={this.props.postVolunteer} />

        </div>
        {this.state.volunteers.filter(volunteer => volunteer.group_id === this.props.getIdFromGroupName(this.props.currentGroup))
          .map(volunteer =>
            //Render one Volunteer component for each current volunteer in a given group.
            <Volunteer 
            //I put math.random because react got angry at me
            changeRole={this.props.changeRole}
            postRequest={this.props.postRequest}
            key={Math.random()}
            username={volunteer.username}
            getDataForRendering={this.getDataForRendering.bind(this)}
            //commenting out picture for now
            picture={volunteer.picture}
            //This maps out the volunteers in the this.state.volunteers array into the child component, volunteer
            volunteer={volunteer}
            orderNumber={volunteer.orderNumber}/>
          )}
        <div className='center'><button className='red-button new-group' onClick={this.props.selectDifferentGroup}>Select a different group</button></div>
     </div>
    );
    }
  }
  
  //We created this function because when we were posting data to the database, it wasn't automatically updating on the screen.
  //Although our post requests were successful, the state was only changing in app.js.
  //By creating this function, voluteerRequestContainer.js's state will also change, therefore rerendering everything in it.

   getDataForRendering(){
    return axios.get('/api/volunteer')
      .then(response => {
        this.setState({volunteers: response.data.data});
      })
      .catch(error => {
        console.log('Error while getting current data: ', error);
      })
  }

  //This function will set the state of app.js
  onSubmit() {
    this.props.getCurrentData();

  }
    
};

export default VolunteerRequestContainer;