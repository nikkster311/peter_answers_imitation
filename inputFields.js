import React from 'react'
//
var petitionAutoFill: "Peter please answer the following question:"
// var petitionAnswer = this.state.petitionAnswer; //the answer from user
// var petitionDisplay = this.state.petitionDisplay; //the displayed
// //these are incorrect ^^ make them children, or props (I think this is proper?)


class inputFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petition: false,
      petitionAnswer: "", //what is the answer to the question?
      petitionDisplay: "" //what is displayed in the petition field
    };

    // this.changeDisplay() = this.changeDisplay.bind(this);
    // this.recordPetition() = this.recordPetition.bind(this);
    // this.handleChange() = this.handleChange.bind(this);

  }


//run this to change displayed petition
  changeDisplay(e, props) {
    var len = props.petitionAnswer.length;
    var newDisplay = petitionAutoFill[len-1];
    this.setState({petitionDisplay: newDisplay}, () => {
      e.target.value = props.petitionDisplay
    })
  }
  // create new display, equal to the autofill (just as many letters as the user has entered).
  // change e.target.value to display something other than what was written.

//when petition = true, run this to record petition
  recordPetition(e, props) {
    props.petitionAnswer = this.state.petitionAnswer.append(e.target.value); //is append right here?
    this.setState({petitionAnswer: props.petitionAnswer}, () => {
      this.changeDisplay(e);
    })
  };


//when typed in petition box, run this:
  handleChange(e) {
    if (e.target.value === ".") {
      this.setState({petition: !this.state.petition}, () => {
        this.recordPetition(e);
      })
    }
  };
//add to this





  render() {
    return(
      <div>
        <h1>Petition Peter</h1>
        <input type="text" value={this.state.petitionDisplay} onChange={this.handleChange} />
      </div>
    )
  }


}

export default inputFields;
