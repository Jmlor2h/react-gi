import './App.css';
import React from 'react'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: []
      
    };
  }
  render() {
    return <div>
        <ul>
          <li>Jacob</li>
          <li>704-557-6805</li>
          <li>06/08/2002</li>
        </ul>
      </div>
    
  }
}


export default App;
