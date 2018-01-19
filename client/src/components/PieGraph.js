import React from 'react';
import {PieChart, Pie, Sector} from 'recharts';
class PieGraph extends React.Component {
  constructor(props){
    super(props);
        super(props);

    this.state = {
      value:"Spending",
      pieGraphData: [
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
  	// this.setState({areaGraphDate:databaseData})
  }

  render(){
    return (
      <div>
        <h1>{this.state.value}</h1>
        <div>

        <PieChart width={800} height={400}>
        <Pie 
          activeIndex={this.state.activeIndex}
          activeShape={this.state.ActiveShape} 
          data={this.state.pieGraphData} 
          cx={300} 
          cy={200} 
          innerRadius={60}
          outerRadius={80} 
          fill="#8884d8"
          onMouseEnter={this.onPieEnter}
        />
       </PieChart>
        </div>
      </div>
    )
  }
}

export default PieGraph;