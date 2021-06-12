import React, {Component} from 'react';

class Palindrome extends Component {

  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    };
  }

  handleChange(val) {
    this.setState({userInput: val});
  }

  checkTacocat(string){
  let array = string.split('');
  let reverseArray = array.reverse();
  let reverseString = reverseArray.join('');

  if(string === reverseString){
    this.setState({palindrome: 'true'})
  } else {
    this.setState({palindrome: 'false'})
  }
}

  render() {
    return(
      <div className="puzzleBox palindromePB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.checkTacocat(this.state.userInput)}>Check</button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    )
  }
}

export default Palindrome;