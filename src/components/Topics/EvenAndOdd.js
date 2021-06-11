import React, { Component } from 'react';

class EvenAndOdd extends Component{
  constructor(){
    super();

    this.state={
      evenArray: [],
      oddArray: [],
      userInput: ''
    }

    // this.handleChange = this.handleChange.bind(this);
    // this.assignEvenAndOdds = this.assignEvenAndOdds.bind(this);
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

  render(){
    return(
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputline" onChange={(e) => this.handleChange(e.target.value)}></input>
        <button className='confirmationButton' onClick={ () => {this.assignEvenAndOdds(this.state.userInput) }}>Split</button>
        <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}

export default EvenAndOdd;