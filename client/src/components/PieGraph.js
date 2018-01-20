import React from 'react';
import {PieChart, Pie, Legend, Tooltip} from 'recharts';
class PieGraph extends React.Component {
  constructor(props){
    super(props);
        super(props);

    this.state = {
      value:"Spending",
      pieGraphData01: [
       {name: 'Utilities', value: 400.0},
      {name: 'Rent/Lease', value: 100.0},
      {name: 'Supplies', value: 300.0},
      {name: 'Advertising', value: 500.0},
      {name: 'Contractors', value: 150.0},
      {name: 'Employee Benf.', value: 350.0},
      {name: 'Meals/Ent.', value: 115.0},
      {name: 'Travel', value: 285.0},
      {name: 'Other', value: 375.0}
      ]

  }
  }
  componentDidMount(){
  	// API.get,
  	// this.setState({pieGraphDate:databaseData})
  }

  render(){
    return (
      <div>
        <h4>{this.state.value}</h4>
        <div>

       <PieChart width={600} height={500}>
        <Pie isAnimationActive={false} data={this.state.pieGraphData01} cx={300} cy={300} outerRadius={170} fill="#8884d8" label/>
        
        <Tooltip/>
       </PieChart>
        </div>
      </div>
    )
  }
}

export default PieGraph;