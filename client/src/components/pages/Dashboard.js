import React from 'react';
import BarGraph from '../BarGraph';
import AreaGraph from '../AreaGraph';
import PieGraph from '../PieGraph';


class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value:"CashMoney"
    }
  }

  render(){
    return (
      <div>
        <h1>{this.state.value}</h1>
        <div>
          <BarGraph />
          <AreaGraph />
          <PieGraph />
         
        </div>
      </div>
    )
  }
}



export default Dashboard;