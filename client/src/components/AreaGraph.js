import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
class AreaGraph extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value:"Hello",
      areaGraphData: [
      {name: 'Jan', Income: 4000, Expenses: 2400, amt: 2400},
      {name: 'Feb', Income: 3000, Expenses: 1398, amt: 2210},
      {name: 'Mar', Income: 2000, Expenses: 9800, amt: 2290},
      {name: 'Apr', Income: 2780, Expenses: 3908, amt: 2000},
      {name: 'May', Income: 1890, Expenses: 4800, amt: 2181},
      {name: 'Jun', Income: 2390, Expenses: 3800, amt: 2500},
      {name: 'Jul', Income: 3490, Expenses: 4300, amt: 2100},
      {name: 'Aug', Income: 3490, Expenses: 4300, amt: 2100},
      {name: 'Sep', Income: 3490, Expenses: 4300, amt: 2100},
      {name: 'Oct', Income: 3490, Expenses: 4300, amt: 2100},
      {name: 'Nov', Income: 3490, Expenses: 4300, amt: 2100},
      {name: 'Dec', Income: 3490, Expenses: 4300, amt: 2100}
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
	       <AreaChart width={600} height={400} data={this.state.areaGraphData}
        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Area type='monotone' dataKey='Income' stroke='#8884d8' fill='#8884d8' />
        <Area type='monotone' dataKey='Expenses' stroke='#82ca9d' fill='#82ca9d' />
      </AreaChart>
        </div>
      </div>
    )
  }
}

export default AreaGraph;
