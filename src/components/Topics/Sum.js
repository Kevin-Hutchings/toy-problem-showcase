import React, {Component} from 'react';

class Sum extends Component{
  constructor(){
    super();

    this.state={
      number1: 0,
      number2: 0,
      sum: null
    };
  }

  updateNumber1(val){
    this.setState({number1: parseInt(val, 10)});
  }

  updateNumber2(val){
    this.setState({number2: parseInt(val, 10)});
  }

  sumAdd(number1, number2){
    this.setState({sum: number1 + number2});
  }

  sumMultiply(number1, number2){
    this.setState({sum: number1 * number2});
  }

  handleReset(){
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = '')
    );

    this.setState({ 
      number1: 0,
      number2: 0,
      sum: null 
    });
  }

  render() {
    return(
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" type="number" onChange={(e) => this.updateNumber1(e.target.value)}/>
        <input className="inputLine" type="number" onChange={(e) => this.updateNumber2(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.sumAdd(this.state.number1, this.state.number2)}>Add</button>
        <button className="confirmationButton" onClick={() => this.sumMultiply(this.state.number1, this.state.number2)}>Multiply</button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
        <button className="confirmationButton" onClick={() => this.handleReset()}>clear</button>
      </div>
    )
  }
}

export default Sum;