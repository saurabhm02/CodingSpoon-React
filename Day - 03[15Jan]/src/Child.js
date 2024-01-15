import React from 'react'
import GrandChild from './GrandChild';

const Child = (props) => {
    const {name, age} = props;
  return (
    <div>
        <GrandChild name={name} age={age}/>
    </div>
  )
}

export default Child