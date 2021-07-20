import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Contador from './Components/Contador';
import Ciclos from './Components/Ciclos';

class App extends Component {

  render(){

    return (
      <div className="App">
        {/* <Header text="que hay" />
        <Contador /> */}
        <Ciclos />
      </div>
    )

  }

}


export default App;
