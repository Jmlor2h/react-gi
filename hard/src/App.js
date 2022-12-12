import './App.css';
import React from 'react';
import Basicinfo from './components/Basicinfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [{
        name: "Jacob",
        number: "704-242-2412",
        birthDate: "06/08/2002"
      }],
      people: [
        {
          name: "Mark",
          number: "704-124-5561",
          birthDate: "03/30/1978"
        },
        {
          name: "Kell",
          number: "704-990-8892",
          birthDate: "12/31/1992"
        },
        {
          name: "Diego",
          number: "704-091-8891",
          birthDate: "01/01/2001"
        },
      ]
    };
  }
  render() {
      // return this.state.person.map(function (person, index) {
      //   return <Basicinfo key={index} person={person} />;
      // });
      return this.state.people.map(function(person, index){
        return <Basicinfo key={index} person={person}></Basicinfo>
      });
  }
}

export default App;
