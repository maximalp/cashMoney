import React from 'react';

const Input = props => {
    return (
      <form>
        <label>
          Name:
          <input onChange={props.onChange} type={props.type} name={props.name}/>
        </label>
      </form>
    )
}

export default Input;
