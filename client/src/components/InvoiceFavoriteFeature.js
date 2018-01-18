import React from 'react';
import InvoiceFavoriteTabs from './InvoiceFavoriteTabs';
import InvoiceFavoriteCard from './InvoiceFavoriteCard';
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
          <div className="col m8">
            <h1>Hello World</h1>
          </div>
          <div className="col m4">
            <InvoiceFavoriteCard />
            {/* <ul className="tabs row tabs-fixed-width">
              <InvoiceFavoriteTabs invoice={this.props.invoice} onClick={this.handleOnClick} style={{"background":"pink"}}/>
              <li onClick={this.change} style={{"background":"pink"}} className="tab col">button</li>


            </ul> */}
            <InvoiceFavoriteTabs className="row" invoice={this.props.invoice} onClick={this.handleOnClick} style={{"background":"pink"}}/>
            {/* <ul>
              <li></li>
            </ul> */}
          </div>
          <div id="test1" className="col m12">Test 1  {this.state.value ? 'Yo YO Yo' : ''}</div>
          <div id="test2" className="col m12">Test 2</div>
          <div id="test3" className="col m12">Test 3</div>
          <div id="test4" className="col m12">Test 4</div>
        </div>
      </div>
    )
  }
}

export default InvoiceFavoriteFeature;