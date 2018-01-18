import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
class BarGraph extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value:"Hello",
      barGraphData: [{
      	name: 'Invoices', 
      	Overdue: 2400, 
      	Outstanding: 6000, 
      	amt: 2400
      }]
    }
  }

  componentDidMount(){
  	// API.get,
  	// this.setState({barGraphDate:databaseData})
  }

  render(){
    return (
      <div>
        <h1>{this.state.value}</h1>
        <div>
	       <BarChart width={600} height={300} data={this.state.barGraphData}
	       margin={{top: 20, right: 30, left: 20, bottom: 5}}>
	       <XAxis dataKey="name"/>
	       <YAxis/>
	       <CartesianGrid strokeDasharray="3 3"/>
	       <Tooltip/>
	       <Legend />
	       <Bar dataKey="Overdue" stackId="a" fill="#8884d8" />
	       <Bar dataKey="Outstanding" stackId="a" fill="#82ca9d" />
	      </BarChart>
        </div>
      </div>
    )
  }
}

export default BarGraph;



