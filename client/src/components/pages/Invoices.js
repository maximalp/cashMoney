import React from "react";
import InvoiceGenerator from '../InvoiceGenerator';
import InvoiceCardListFeature from '../InvoiceCardListFeature';
import API from '../utils/API';
import InvoiceModal from '../InvoiceModal';
import InvoiceFavoriteFeature from '../InvoiceFavoriteFeature';

class Invoices extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: "",
      phoneNumber: "",
      street: "",
      city: "",
      USstate: "",
      zip:"",
      country:"United States",
      clientFirstName:"",
      clientLastName:"",
      clientCompanyName:"",
      clientStreetAddress:"",
      clientCity:"",
      clientState:"",
      clientZip:"",
      amountDue:"",
      lineDescription:"",
      lineRate:"",
      lineQty:"",
      lineTotal:"",
      holderEdit:{},
      holder:{},
      invoice:[
          {field1:"cat", field2:"catkins"},
          {field1:"dog", field2:"dogkins"},
          {field1:"bunny", field2:"fluffykins"},
          {field1:"lizard", field2:"scalekins"},
          {field1:"bird", field2:"featherkins"},
          {field1:"fish", field2:"swimkins"},
          {field1:"snake", field2:"snekskins"},
          {field1:"dragon", field2:"dragonkins"},
        ],
      searchSwitches:{
          clientCompanyNameOrinvoiceId:true,
          issuedDateDesc:true,
          dueDateDesc: true,
          AmountOrStatus: true
      },
        favoriteInvoices: [],
        theChosenOne:""
    }
  }

  componentDidMount() {
    let query = '/api/pullInvoices';
    API.get(query)
      .then(res => {
        let invoices = res.data.all;
        let favorite = res.data.favorite
        console.log("invoices", invoices);
        this.setState({
          invoice:invoices,
          favoriteInvoices:favorite,
          theChosenOne:favorite[0]
        })
        console.log("state",this.state)
      })
      .catch(err => console.log(err));
  }

  handleOnClickFaveTabs = (event) => {
    let id = event.target.id;
    console.log(id);
    let favoriteList = this.state.favoriteInvoices;
    console.log("favoriteList", favoriteList)

    if (id === 'off') {
      console.log("off")
    }
    else {
      let theChosenOne = favoriteList.find(invoice => {
        return invoice._id === id
      })
      this.setState({theChosenOne})
    }
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleInputChangeEdit = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const newState = this.state.holderEdit;
    newState[name] = value;
    this.setState({
      holderEdit: newState
    });
    console.log('HOLDEREDIT',this.state.holderEdit);
  }

  pullInvoices = () => {
    let query = '/api/pullInvoices';
    API.get(query)
      .then(res => {
        let invoices = res.data.all;
        let favorite = res.data.favorite
        console.log("invoices", invoices);
        this.setState({
          invoice:invoices,
          favoriteInvoices:favorite,
          theChosenOne:favorite[0]
        })
        console.log("state",this.state)
      })
      .catch(err => console.log(err));
  }

  favoriteSetState = (invoices) => {
    this.setState({
      invoice:invoices
    })
  }

  handleOnClickSearchSwitches = (event) => {
    let filterSwitch = event.target.name;
    let query = `/api/invoice/filter/${filterSwitch}`

    // switch(filterSwitch) {
    //   case "clientCompanyNameOrinvoiceId":
    //     this.state.
    //     break;
    //   case "issuedDateDesc":
    //     Coded
    //     break;
    //   case "dueDateDesc":
    //     Coded
    //     break;
    //   case "AmountOrStatus":
    //     Coded
    //     break;
    // }

    API.get(query)
      .then(res => {
        console.log(res.data);
        this.setState({invoice:res.data})
      })
      .catch(err => console.log(err));
  }

  handleOnClickCreate = (event) => {
    let query = '/make';
    API.get(query)
    .then(res => {
      let newEntry = res.data;
      this.setState({holder:newEntry})
    })
    .catch(err => console.log(err));
  }

  handleOnClickState = (event) => {
    console.log(this.state);
  }

  handleOnClickEdit = (id) => {
    // console.log('Edit this invoice!', id)
    let query = '/api/invoice/'+id;
    // console.log(query);
    API.get(query)
      .then(res => {
        console.log('HODL', res.data[0])
        let holderEdit = res.data[0]
        this.setState({holderEdit})
        console.log('STATE!!!!!!!!!!!!!!',this.state.holderEdit)
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleOnClickChip = (event) => {
    // console.log(event.target.id);
    let query = {id:event.target.id}
    API.put(query)
      .then(res => {
        // console.log(res.)
        console.log("id", res.data.changed._id);
        let newInvoice = res.data.changed
        let id = res.data.changed._id;
        console.log("state", this.state.invoice);
        let currentState = this.state.invoice;
        let arrayOfStateId = currentState.map(invoice => {
          return invoice._id
        })
        console.log("arrayOfStateId", arrayOfStateId);

        let indexOfFavorited = arrayOfStateId.indexOf(id);
        if (indexOfFavorited !== -1) {
          currentState[indexOfFavorited] = newInvoice;
          // let fInvoices = this.state.favoriteInvoices;
          // fInvoices.push(newInvoice);
          this.setState({invoices:currentState, favoriteInvoices:res.data.favorite, theChosenOne:[{ _id:'off', invoiceId:"No favorite invoices!"}]})
        }

        // is this better? /////////////***
        // this.props.pullInvoices();


        // console.log("indexOfFavorited", indexOfFavorited);
        // this.props.onClick();
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <div className="row">
        <div className="col m12">
          <InvoiceModal pullInvoices={this.pullInvoices}>
          </InvoiceModal>
        </div>
        <div className="col m12">
          <div className="row">
            <div className="col m12">
              <h3>Recent Invoices</h3>
              <InvoiceFavoriteFeature theChosenOne={this.state.theChosenOne} favoriteInvoices={this.state.favoriteInvoices} handleOnClickFaveTabs={this.handleOnClickFaveTabs} invoice={this.state.invoice}/>
              {/* <button onClick={this.handleOnClickState}>Show State</button>
              <button onClick={this.handleOnClickCreate}>Create dummy invoice</button> */}
            </div>
          </div>
          {/* <div className="row">
            <div className="col m3">
              <h5>All Invoices</h5>
            </div>
          </div> */}
          <div className="row">
            <div className="col m12">
              <InvoiceCardListFeature inputChange={this.handleInputChangeEdit} edit={this.state.holderEdit} handleOnClickEdit={this.handleOnClickEdit} handleOnClickChip={this.handleOnClickChip} pullInvoices={this.pullInvoices} faveState={this.favoriteSetState} onClick={this.pullInvoices} switches={this.handleOnClickSearchSwitches} invoice={this.state.invoice}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Invoices;
