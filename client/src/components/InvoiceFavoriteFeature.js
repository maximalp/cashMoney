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
        <div class="row">
          <div class="col s12">
            <ul class="tabs tabs-fixed-width">
              <InvoiceFavoriteTabs />
              <li onClick={this.change} style={{"background":"pink"}} class="tab col">button</li>
              <li style={{"background":"pink"}} class="tab col"></li>
              <li style={{"background":"pink"}} class="tab col disabled"></li>
              <li style={{"background":"pink"}} class="tab col">button</li>
              <li style={{"background":"pink"}} class="tab col">button</li>
              <li style={{"background":"pink"}} class="tab col">button</li>
              <li style={{"background":"pink"}} class="tab col">button</li>
              <li style={{"background":"pink"}} class="tab col">button</li>
            </ul>
          </div>
          <div id="test1" class="col s12">Test 1  {this.state.value ? 'Yo YO Yo' : ''}</div>
          <div id="test2" class="col s12">Test 2</div>
          <div id="test3" class="col s12">Test 3</div>
          <div id="test4" class="col s12">Test 4</div>
        </div>
      </div>
    )
  }
}

export default InvoiceFavoriteFeature;
