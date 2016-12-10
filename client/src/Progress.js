import React, {Component} from 'react';

class Progress extends Component {
  constructor(props) {
    super(props);
    }
  }
  //save to state
  render(){
    //change class between todo and done
    return (
      <div>
    		<div className="progress-container">
          <ol className="progress-meter">
            <li className="progress-point done">05:20 mins</li><li className="progress-point done">05:10 mins</li><li className="progress-point done">Link</li><li className="progress-point todo">Connect</li>
          </ol>
        </div>
      </div>
    )
  }
   
};

export default Progress;