import React from 'react';
import {RadialBarChart, RadialBar, Legend} from 'recharts';
class RadialGraph extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value:"Hello",
      radialGraphData: [
      {name: 'Utilities', Expense: 400, pv: 2400, fill: '#8884d8'},
      {name: 'Rent/Lease', Expense: 100, pv: 4567, fill: '#83a6ed'},
      {name: 'Supplies', Expense: 300, pv: 1398, fill: '#8dd1e1'},
      {name: 'Advertising', Expense: 500, pv: 9800, fill: '#82ca9d'},
      {name: 'Contractors', Expense: 150, pv: 3908, fill: '#a4de6c'},
      {name: 'Employee Benf.', Expense: 350, pv: 4800, fill: '#d0ed57'},
      {name: 'Meals/Ent.', Expense: 275, pv: 4800, fill: '#ffc658'},
      {name: 'Travel', Expense: 275, pv: 4800, fill: '#ffc658'},
      {name: 'Other', Expense: 275, pv: 4800, fill: '#ffc658'}
      ]
    }
  }

  static defaultProps = {
    style : {
     'box-sizing': 'border-box',
     padding: '10px',
     width: '800px',
     height: '800px',
     'background-color': '#fff',
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
	      <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={this.state.radialGraphData}>
          <RadialBar minAngle={15} label background clockWise={true} dataKey='Expense'/>
          <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={this.props.style}/>
        </RadialBarChart>
        </div>
      </div>
    )
  }
}

export default RadialGraph;