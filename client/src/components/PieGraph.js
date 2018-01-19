import React from 'react';
import {PieChart, Pie, Legend, Tooltip} from 'recharts';
class PieGraph extends React.Component {
  constructor(props){
    super(props);
        super(props);

    this.state = {
      value:"Spending",
      pieGraphData01: [
       {name: 'Utilities', value: 400},
      {name: 'Rent/Lease', value: 100},
      {name: 'Supplies', value: 300},
      {name: 'Advertising', value: 500},
      {name: 'Contractors', value: 150},
      {name: 'Employee Benf.', value: 350},
      {name: 'Meals/Ent.', value: 115},
      {name: 'Travel', value: 285},
      {name: 'Other', value: 375}
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
        <Pie isAnimationActive={false} data={this.state.pieGraphData01} cx={300} cy={300} outerRadius={180} fill="#8884d8" label/>
        
        <Tooltip/>
       </PieChart>
        </div>
      </div>
    )
  }
}

export default PieGraph;