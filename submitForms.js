import React from 'react'

var defaultPetition = "Peter please answer the following question"
var displayString = ""

//problem might be updating state with each new keystroke??





class submitForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petitionValue: '',
      displayValue: "", //the answer someone types to be displayed on submit
      recording: false //if (.) entered, this is true, (.) entered again, this is false
    };

    this.handleChange = this.handleChange.bind(this);
    // this.inputtingAnswerHandler = this.inputtingAnswerHandler.bind(this);
    // this.generalDisplay = this.generalDisplay.bind(this);
    this.buildSentence = this.buildSentence.bind(this);
  }

  // handleChange(event) {this.setState({value: event.target.value});}
  // handleSubmit(event) {alert(this.state.value); event.preventDefault();}





  buildSentence(e) {
    console.log("buildSentence starting, recording: " + this.state.recording)
    if (this.state.recording && displayString === "") {//if recording, add letter by letter the display string
      displayString = defaultPetition.slice(0, displayString.length)
      this.setState({displayValue: displayString}, () => {
        console.log("recording " + this.state.recording + " displayString empty. state.displayValue = " + this.state.displayValue  + " and displayString = " + displayString)
      })
    } else if (!this.state.recording && displayString !== "") {//if was but now not recording, add what person types to the display sentence they've been building
      displayString += e.target.value
      this.setState({displayValue: displayString}, () => {
        console.log("recording " + this.state.recording + ". displayString =" + displayString + ". state.displayValue = " + this.state.displayValue  + " and displayString = " + displayString)
      })
    } else {//if never was recording
      this.setState({displayValue: e.target.value}, () => {
        console.log("recording " + this.state.recording + ". state.displayValue = " + this.state.displayValue  + " and displayString = " + displayString)
      })
    }
  this.setState({petitionValue: e.target.value});

  }




  recordToggle(event) {
    if (event.target.value === ".") { //if the user enters a . in petition box...
      this.setState(prevState => ({
        recording: !prevState.recording
      })); //turn recording on or off
    }
    console.log("recordToggle finished, this.state.recording: " + this.state.recording)
    }

    // this.state.recording ? this.inputtingAnswerHandler() : this.generalDisplay(); //these set display value
    // console.log("handleChange done, petitionValue: " + this.state.petitionValue + ", displayValue: " + this.state.displayValue + ", recording: " + this.state.recording)
    //if recording=t, run inputtingAnswerHandler, else run generalDisplay





    //sets to start recording the value being input but showing something else, then sets it to either display what someone is typing or to display the defaultPetition
    handleChange(event) {
      console.log("calling recordToggle..")
      this.recordToggle(event);
      console.log("recroding toggle called, calling buildSentence..")
      this.buildSentence(event);
      console.log("buildSentence finsihed")
      console.log("******************")
      // console.log("handleChange starting, petitionValue: " + this.state.petitionValue + ", displayValue: " + this.state.displayValue + ", recording: " + this.state.recording)
  }





  // //covering their answer with default text until press . again
  // inputtingAnswerHandler(event) { //runs when user is typing in own answer
  //   // console.log("******************")
  //   // console.log("inputtingAnswerHandler beginning, petitionValue: " + this.state.petitionValue + ", displayValue: " + this.state.displayValue + ", recording: " + this.state.recording)
  //   this.setState({petitionValue: event.target.value})
  //   var currentDisplayed = "" //will be set to displayValue state
  //   currentDisplayed.concat(defaultPetition[this.state.petitionValue.length-1]) //concat same index number, fake display people see is same length as what is being input by the typer
  //   this.setState({displayValue: currentDisplayed}, () => {
  //     // console.log("inputtingAnswerHandler done, petitionValue: " + this.state.petitionValue + ", displayValue: " + this.state.displayValue + ", recording: " + this.state.recording)
  //   })
  // }

// //below petition value should be equal to or similar to default petition
//   generalDisplay(event) { //display = petitionValue
//     // console.log("******************")
//     // console.log("generalDisplay beginning, petitionValue: " + this.state.petitionValue + ", displayValue: " + this.state.displayValue + ", recording: " + this.state.recording)
//     this.setState({displayValue: event.target.value, petitionValue: event.target.value})
//   }





  render() {
    return (
      <div className="bodyWrapper">
         <div className="mainContent">
           <div className="writingSpace">
             <h4>Ask Peter a Question</h4>
             <p>Your must polietly potition before peter will answer you. Start with "Peter please answer" or "Peter please answer the following question"</p>

            <form onSubmit={this.handleSubmit}>
              <label>
                Ask a question
                <input type="text" value={this.state.petitionValue} displayvalue={this.state.displayValue} onChange={this.handleChange} />
              </label>
            </form>

           </div>
         </div>
         <div className="sideBar"><p>sideBar</p></div>
       </div>
    );
  }
}

export default submitForms;

// const writingView = (props) => {
//
//   return(
//     <div className="bodyWrapper">
//       <div className="mainContent">
//         <div className="writingSpace">
//           <h4>Take this time to reflect and jot down your observations.</h4>
//           <p>A list of descriptive words are available on the right to get your creative juices flowing.</p>
//           <form onSubmit={props.submit}>
//             <label>
//               Input here:
//               <textarea className="writingBox" defaultValue="some text">
//               </textarea>
//             </label>
//             <input type="submit" value="Submit"/>
//           </form>
//         </div>
//         <div className="postToSocialMediaIcons"><p>postToSocialMediaIcons</p></div>
//       </div>
//       <div className="sideBar"><p>sideBar</p></div>
//     </div>
//   )
// };
//
//
// export default writingView;
