import "./App.css";
import React from "react";
import Basicinfo from "./components/Basicinfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [{
        name: "Jacob",
        number: "704-242-2412",
        birthDate: "06/08/2002"
      }]
    };
  }
  render() {
    return this.state.person.map(function(person, index){
      return <Basicinfo key={index} person={person}></Basicinfo>
    });
  }
}

export default App;
