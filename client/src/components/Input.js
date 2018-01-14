import React from 'react';

const Input = props => {
    return (
      <form>
        <label>
          <input onChange={props.onChange} type={props.type} name={props.name}/>
        </label>
      </form>
    )
}

export default Input;
