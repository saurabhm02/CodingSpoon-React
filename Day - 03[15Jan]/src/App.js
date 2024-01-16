
// class based component

// import React, { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       show: false,
//     };
//   }

//   toggleShow = () => {
//     this.setState((prevState) => ({ show: !prevState.show }));
//   };

//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.toggleShow}>Hello</button>
//         {this.state.show && <div>show ho gya</div>}
//       </div>
//     );
//   }
// }

// export default App;


// function based component

import React, { useState } from "react";
import Home from "./Home";
function App(props) {
  const {name, age} = props;
  const [show, setShow]= useState(false);
  const data = [1, 2, 3, 4, 5];
  const [count, setCount]= useState(0);
  return (
    <div className="App">
      <button  onClick={()=> setShow(!show)}>Hello</button>
      { show && <Home name={name} age={age}/> }
      {
        data.map((item, index) => {
          return <div key={index}>{item}</div>
        })
      }

      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
          {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      
    </div>
  );
}

export default App;



