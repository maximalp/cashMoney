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

