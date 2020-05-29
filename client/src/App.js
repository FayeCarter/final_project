import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./component/Join.js";
import Chat from "./component/Chat.js";
import Rooms from "./component/Rooms.js";

const App = () => {
  const [name, setName] = useState("Angelica");
  const [room, setRoom] = useState("");

  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route
        path="/chat"
        exact
        render={({ props }) => <Chat {...props} name={name} room={room} />}
      />
      <Route
        path="/rooms"
        exact
        render={({ props }) => <Rooms {...props} setRoom={setRoom} />}
      />
    </Router>
  );
};

export default App;
// import './App.css';

// import User from "./component/User.js"

// class App extends Component {

//   state = {
//     message: ''
//   }

//   componentDidMount() {
//     this.fetchMessage()
//   }

//   fetchMessage = async () => {
//     const response = await fetch('/api/')
//     const resultObject = await response.json()
//     const message = resultObject.message
//     this.setState({ message })
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.message}</p>
//         <User />
//       </div>

//     )
//   }
// }
