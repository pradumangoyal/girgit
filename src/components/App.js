import React, { Component } from 'react';
import '../App.css';
import NavTab from '../containers/NavTab'
import Tab2 from '../containers/Tab2'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavTab />
      <Tab2 />
      </div>
    );
  }
}

export default App;
