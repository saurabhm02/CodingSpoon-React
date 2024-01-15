import React from 'react'
import Child from './Child'; 
const Home = (props) => {
const {name, age} = props;
  return (
    <>
        <Child name={name} age={age}/>
    </>
    
  )
}

export default Home