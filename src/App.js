import React, { Component } from 'react';
import './App.css';
import logo from './kp_image.gif';
import Person from './Person/Person';
class App extends Component {

  state = {
    persons: [
        {name : "Purvish"},
        {name : "Komal"}
    ]
  }

  switchNameHandler = () =>
  {
    this.setState({
      persons: [
          {name : "Oza"},
          {name : "Pranjal"},
      ]
    })
  }
  render() {
    return (
      <div className="App">
    
        <p className='App-header' img>KAISER PERMANANTE</p>
        <button onClick = {this.switchNameHandler}>Switch name</button>
        {/*I can try from this file itslef to render it on UI like below*/}
        <p >I am {this.state.persons[0].name}  </p>

    {  /*  Following part is coming from Person component (Same thing i did up with <p> */}
         <Person name = {this.state.persons[0].name}/>
      </div>
    );
  }
}

export default App;
