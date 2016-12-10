import React, {Component} from 'react';

class Progress extends Component {
  constructor(props) {
    super(props);
  }
  //save to state
  render(){
    // There's not much to this component. Technically, we could probably throw it in the app.js if we wanted to.
    return (
      <div>
    		<div className="progress-message">{this.props.status}</div>
        <div className="progress-cigar">{this.props.status}</div>
      </div>
    )
  }
   
};

export default Progress;