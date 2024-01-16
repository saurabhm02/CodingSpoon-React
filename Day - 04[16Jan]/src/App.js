// import React, { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     console.log("From constructor");
//   }

//   static getDerivedStateFromProps(nextProps, nextState) {
//     console.log("From getDerivedStateFromProps");
//     return null;
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("From shouldComponentUpdate");
//     return true;
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("From getSnapshotBeforeUpdate");
//     return null;
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log("From componentDidUpdate");
//   }

//   componentDidMount() {
//     console.log("From componentDidMount");
//   }

//   componentWillUnmount() {
//     console.log("From componentWillUnmount");
//   }

//   componentDidCatch(error, errorInfo) {
//     console.log("From componentDidCatch");
//   }

//   render() {
//     console.log("From render");
//     return (
//       <>
//         {this.state.count}
//         <button
//           onClick={() => this.setState((prev) => ({ count: prev.count + 1 }))}
//         >
//           click
//         </button>
//       </>
//     );
//   }
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import GrandChild from "./components/GrandChild";
import Child from "./components/Child";

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/child" element={<Child />} />
          <Route path="/grandchild" element={<GrandChild />} />
        </Routes>
      </Router>
    </>
  );
}
