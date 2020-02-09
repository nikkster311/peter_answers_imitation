import React, { Component } from 'react';
import './App.css';
import SubmitForms from './submitForms';
import InputFields from './inputFields';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      petition: false,
      petitionAnswer: "", //what is the answer to the question?
      petitionDisplay: "" //what is displayed in the petition field
    };


    var petitionAnswer = this.state.petitionAnswer; //the answer from user
    var petitionDisplay = this.state.petitionDisplay; //the displayed
    //these are incorrect ^^ make them children, or props (I think this is proper?)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SubmitForms />
          <InputFields
          petitionAnswer={this.petitionAnswer}
          petitionDisplay={this.petitionDisplay}/>
        </header>
      </div>
    );
  }
}

export default App;
