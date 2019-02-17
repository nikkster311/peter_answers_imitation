import React, { Component } from 'react';
import './App.css';
import SubmitForms from './submitForms';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SubmitForms />
        </header>
      </div>
    );
  }
}

export default App;
