import React, { Component } from 'react';
import './App.css';
import Counter from './state/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter count={123} step={2}/>
      </div>
    );
  }
}

export default App;