import React, {Component} from 'react';

class Progress extends Component {
  constructor(props) {
    super(props);
    }
  
  componentDidMount(){
    console.log(this.props.orderId);
    socket.on('status' + this.props.orderId, function(status){
      if (status === 'Fetcher Departed'){
        $('#task1').removeClass( "todo");
        $('#task1').addClass("done");
        $('#task2,#task3').removeClass( "done");
        $('#task2,#task3').addClass( "todo");
      }
      if (status === 'Fetcher Returning'){
        $('#task1,#task2').removeClass("todo");
        $('#task1,#task2').addClass("done")
        $('#task3').removeClass( "done");
        $('#task3').addClass('todo')
      }
      if (status === 'Food Arrived'){
        $('#task1,#task2,#task3').removeClass("todo");
        $('#task1,#task2,#task3').addClass("done")
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