import React, { Component } from 'react';

class EvenAndOdd extends Component{
  constructor(){
    super();

    this.state={
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  handleChange(val){
    this.setState({userInput: val});
  }

  assignEvenAndOdds(userInput){
    let arr = userInput.split(',');
    let evens = [];
    let odds = [];

    arr.forEach(number => {
      if(number % 2 === 0){
        evens.push(number)
      } else {
        odds.push(number)
      }
    });

    this.setState({
      evenArray: evens,
      oddArray: odds
    });
  }

  handleReset(){
    Array.from(document.querySelectorAll('input')).forEach(input => input.value = '');

    this.setState({
      evenArray: [],
      oddArray: [],
      userInput: ''
    });
  }

  render(){
    return(
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
        <button className='confirmationButton' onClick={() => {this.assignEvenAndOdds(this.state.userInput) }}>Split</button>
        <button className='confirmationButton' onClick={() => this.setState({userInput: '1,2,3,4,5,6,7,8,9,10'})}>Ex: 1-10</button>
        <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray, null, 1)}</span>
        <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray, null, 1)}</span>
        <button className='confirmationButton' onClick={() => {this.handleReset()}}>Clear</button>
      </div>
    )
  }
}

export default EvenAndOdd;