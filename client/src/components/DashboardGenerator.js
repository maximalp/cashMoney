import React from 'react';
import Input from './Input';
import API from './utils/API';

const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
const data = [
      {name: 'Invoices', Overdue: 2400, Outstanding: 6000, amt: 2400},
];
const StackedBarChart = React.createClass({
  render () {
    return (
      <BarChart width={600} height={300} data={data}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="Overdue" stackId="a" fill="#8884d8" />
       <Bar dataKey="Outstanding" stackId="a" fill="#82ca9d" />
      </BarChart>


    );
  }
})

ReactDOM.render(
  <StackedBarChart />,
  document.getElementById('container')
);



const {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} = Recharts;
const data = [
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
      {name: 'Dec', Income: 3490, Expenses: 4300, amt: 2100},
];
const SimpleAreaChart = React.createClass({
  render () {
    return (
      <AreaChart width={600} height={400} data={data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Area type='monotone' dataKey='Income' stroke='#8884d8' fill='#8884d8' />
                <Area type='monotone' dataKey='Expenses' stroke='#82ca9d' fill='#82ca9d' />
      </AreaChart>
    );
  }
})

ReactDOM.render(
  <SimpleAreaChart />,
  document.getElementById('container')
);


const { PieChart, Pie, Sector, Cell } = Recharts;
const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;                    

const SimplePieChart = React.createClass({
  render () {
    return (
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data} 
          cx={120} 
          cy={200} 
          innerRadius={60}
          outerRadius={80} 
          fill="#8884d8"
          paddingAngle={5}
        >
          {
            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Pie
          data={data} 
          cx={420} 
          cy={200} 
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80} 
          fill="#8884d8"
          paddingAngle={5}
        >
          {
            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
    );
  }
})

ReactDOM.render(
  <SimplePieChart />,
  document.getElementById('container')
);