import React from 'react';
import InvoiceFavoriteTabs from './InvoiceFavoriteTabs';
import API from './utils/API';

class InvoiceFavoriteFeature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteInvoices:[]
    }
  }

  handleOnClick = (event) => {
    console.log(event.target.id);
  }

  componentDidMount(){
    let query = '/api/invoice/favorite';
    API.get(query)
      .then((res) => {
        console.log(res)
        this.setState({
          favoriteInvoices:res
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <ul className="tabs tabs-fixed-width row">
              <InvoiceFavoriteTabs onClick={this.handleOnClick} style={{"background":"pink"}}/>
              <li onClick={this.change} style={{"background":"pink"}} className="tab col">button</li>
              <li style={{"background":"pink"}} className="tab col"></li>
              <li style={{"background":"pink"}} className="tab col disabled"></li>
              <li style={{"background":"pink"}} className="tab col">button</li>
              <li style={{"background":"pink"}} className="tab col">button</li>
              <li style={{"background":"pink"}} className="tab col">button</li>
              <li style={{"background":"pink"}} className="tab col">button</li>

            </ul>
          </div>
          <div id="test1" className="col s12">Test 1  {this.state.value ? 'Yo YO Yo' : ''}</div>
          <div id="test2" className="col s12">Test 2</div>
          <div id="test3" className="col s12">Test 3</div>
          <div id="test4" className="col s12">Test 4</div>
        </div>
      </div>
    )
  }
}

export default InvoiceFavoriteFeature;
