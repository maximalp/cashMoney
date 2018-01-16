import React from 'react';

const Input = props => {
    return (
      <form>
        <label>
          <input placeholder={props.placeholder} onChange={props.onChange} type={props.type} name={props.name}/>
        </label>
      </form>
    )
}

export default Input;
