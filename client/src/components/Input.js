import React from 'react';

const Input = props => {
    return (
      <form>
        <input value={props.value} placeholder={props.placeholder} onChange={props.onChange} type={props.type} name={props.name}/>
      </form>
    )
}

export default Input;
