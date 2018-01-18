import React from 'react';
import BarGraph from '../BarGraph';
import AreaGraph from '../AreaGraph';
//import RadialGraph from '../RadialGraph';//


class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value:"BarGraph"
    }
  }

  render(){
    return (
      <div>
        <h1>{this.state.value}</h1>
        <div>
          <BarGraph />
          <AreaGraph />
          
         


          
        </div>
      </div>
    )
  }
}



export default Dashboard;