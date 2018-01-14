import React from 'react';
import axios from 'axios';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values:""
    }
  }

  handleOnClick = () => {
    axios.get('/about')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    return (
      <button onClick={this.handleOnClick}>Button 2</button>
    )
  }

}

export default Button;
