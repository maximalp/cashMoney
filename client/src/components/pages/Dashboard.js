import React from 'react';
// import BarGraph from '../BarGraph';
// import AreaGraph from '../AreaGraph';
// import PieGraph from '../PieGraph';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import API from '../utils/API';
import {PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine} from 'recharts';

const data = [
      {name: 'Total Invoices', uv: -4000}
];


class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value:"CashMoney",
      startDateBar: moment(),
      endDateBar: moment(),
      startDateArea: moment(),
      endDateArea: moment(),
      startDatePie: moment(),
      endDatePie: moment(),
      barGraphData:[],
      profitBarGraphData:[],
      maxProfitBarGraphData:0,
      pieGraphData:[]
    }
  }

  componentDidMount() {
    let query = '/api/dashboard/info';
    API.get(query)
    .then(res => {
      console.log(res.data);
      console.log(res.data.invoice)
      console.log('PROFITS!', res.data.profit)
      let barGraphData = res.data.invoice
      let profitBarGraphData = res.data.profit
      let maxProfitBarGraphData = Math.abs(profitBarGraphData[0].profit)
      console.log('MAX', maxProfitBarGraphData)

      let categoriesArray = res.data.expenseCategory;
      let categoriesValuesArray = res.data.expenseTotal
      let pieGraphData = []

      for (let i = 0; i < categoriesArray.length; i++) {
        let data = {name: categoriesArray[i], value: categoriesValuesArray[i]}
        pieGraphData.push(data)

      }


      this.setState({
        barGraphData,
        profitBarGraphData,
        maxProfitBarGraphData,
        pieGraphData
      })
      console.log('profitBarGraphData', profitBarGraphData[0].profit)
    })
    .catch(err => console.log(err) )
  }


  handleCalendarChangeStartBar = (date) => {
    this.setState({
      startDateBar:date
    });
  }

  handleCalendarChangeEndBar = (date) => {
    this.setState({
      endDateBar:date
    });
  }
  handleCalendarChangeStartArea = (date) => {
    this.setState({
      startDateArea:date
    });
  }
  handleCalendarChangeEndArea = (date) => {
    this.setState({
      endDateArea:date
    });
  }
  handleCalendarChangeStartPie = (date) => {
    this.setState({
      startDatePie:date
    });
  }
  handleCalendarChangeEndPie = (date) => {
    this.setState({
      endDatePie:date
    });
  }

  render(){

    // let maxHeight = Math.abs(this.state.profitBarGraphData[0].profit);

    return (

      <div className="row">
        <div className="left-align col m6">
          <h4>Revenue</h4>
          {/* Invoices */}
          <BarChart className="z-depth-3" width={450} height={500} data={this.state.barGraphData}
                margin={{top: 20, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="name"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <ReferenceLine y={0} stroke='#000' />
           <Legend />
           <Bar dataKey="sent" stackId="a" fill="#d0e079" />
           <Bar dataKey='paid' stackId="a" fill="#82ca9d" />
          </BarChart>
        </div>
        <div className="col m6 left-align">
          <h4>Expenses</h4>
          <PieChart className="z-depth-3" width={600} height={500}>
            <Legend verticalAlign="top" />
            <Pie isAnimationActive={false} data={this.state.pieGraphData} cx={300} cy={300} outerRadius={170} fill="#c91044" label/>

            <Tooltip/>
            <br></br>

          </PieChart>
        </div>

        <div className="col m12 left-align">
          <h4>Net Income</h4>
          <BarChart className="z-depth-3" width={500} height={500} data={this.state.profitBarGraphData}
                margin={{top: 20, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="name"/>
           <YAxis domain={['auto', this.state.maxProfitBarGraphData ]} />
           <CartesianGrid strokeDasharray="3 3"/>
           <ReferenceLine y={0} stroke='#000' />
           <Tooltip/>
           <Legend />
           <Bar dataKey="profit" stackId="a" fill="#8884d8" />
          </BarChart>
        </div>
      </div>

    )
  }
}



export default Dashboard;
