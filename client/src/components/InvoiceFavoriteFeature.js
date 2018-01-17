import React from 'react';
import InvoiceFavoriteTabs from './InvoiceFavoriteTabs';

class InvoiceFavoriteFeature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }
  change = ()=>{
    this.setState({
      value: "hi"
    });
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <ul className="tabs tabs-fixed-width">
              <InvoiceFavoriteTabs />
              <li onClick={this.change} style={{"background":"pink"}} className="tab col">button</li>
              <li style={{"background":"pink"}} className="tab col"></li>
              <li style={{"background":"pink"}} className="tab col disabled"></li>
              <li style={{"background":"pink"}} className="tab col">button</li>
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
