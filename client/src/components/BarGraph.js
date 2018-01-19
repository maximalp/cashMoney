import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
class BarGraph extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value:"Outstanding Revenue",
      barGraphData: [{
      	name: 'Invoices', 
      	Overdue: 300, 
      	Outstanding: 600, 
      	amt: 200
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
        <h3>{this.state.value}</h3>
        <div>
	       <BarChart width={600} height={300} data={this.state.barGraphData}
	       margin={{top: 20, right: 30, left: 20, bottom: 5}}>
	       <XAxis dataKey="name"/>
	       <YAxis/>
	       <CartesianGrid strokeDasharray="3 3"/>
	       <Tooltip/>
	       <Legend />
	       <Bar dataKey="Overdue" stackId="a" fill="#f22b59" />
	       <Bar dataKey="Outstanding" stackId="a" fill="#d4e06b" />
	      </BarChart>
        </div>
      </div>
    )
  }
}

export default BarGraph;



