import React from "react";
import InvoiceGenerator from '../InvoiceGenerator';

class Invoices extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: "",
      number: "",
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
      lineTotal:""
    }
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleOnClick = (event) => {
    console.log(this.state);
  }

  render () {
    return (
      <div>
        <h1>Invoices</h1>
        <p>
          Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
          Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu dictum.
          Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus sodales
          volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc, sed
          pretium risus rutrum eget. Nam consequat, ligula in faucibus vestibulum,
          nisi justo laoreet risus, luctus luctus mi lacus sit amet libero. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Mauris pretium condimentum tellus eget lobortis. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Donec placerat accumsan
          mi, ut congue neque placerat eu. Donec nec ipsum in velit pellentesque
          vehicula sit amet at augue. Maecenas aliquam bibendum congue. Pellentesque
          semper, lectus non ullamcorper iaculis, est ligula suscipit velit, sed
          bibendum turpis dui in sapien.
        </p>
        <InvoiceGenerator/>
      </div>
    )
  }
}

export default Invoices;
