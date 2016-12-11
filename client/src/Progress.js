import React, {Component} from 'react';

class Progress extends Component {
  constructor(props) {
    super(props);
    }
  
  componentDidMount(){
    socket.on('status' + this.props.orderId, function(status){
      if (status === 'Fetcher Departed'){
        $('#task1').toggleClass( "todo done");
      }
      if (status === 'Fetcher Returning'){
        $('#task2').toggleClass( "todo done");
      }
      if (status === 'Food Arrived'){
        $('#task3').toggleClass( "todo done");
      }
    })
  }
  //save to state
  render(){
    //change class between todo and done
    return (
      <div className="progress-div">
    		<div className="progress-container">
          <ol className="progress-meter">
            <li className="progress-point done">Orders Being Placed</li><li id='task1' className="progress-point todo">Fetching Food</li><li id='task2' className="progress-point todo">Food Inbound</li><li id='task3' className="progress-point todo">Food is Here</li>
          </ol>
        </div>
      </div>
    )
  }
   
};

export default Progress;