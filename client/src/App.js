import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Dashboard from "./components/pages/Dashboard";
import Invoices from "./components/pages/Invoices";
import Clients from "./components/pages/Clients";
import Expenses from "./components/pages/Expenses";
import Contact from "./components/pages/Contact";
import Button from './components/Button';

class App extends Component {

  render() {
    return (
      // React leftovers
      <div className="App container">

        <div className="row">
          {/* Router */}
          <Router>
            <div>
              {/* These create physical listings */}
              <div style={{background:'#009688', 'list-style-type':'none', 'margin': '0' }} className="col m12 z-depth-3">
                <Navpills />
              </div>

              {/* These create the HTTP routes  */}
              <div className="col m12">
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/invoices" component={Invoices} />
              <Route exact path="/clients" component={Clients} />
              <Route path="/expenses" component={Expenses} />
              <Route path="/expenses/learn" component={Contact} />
              </div>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
