import React, {Component} from 'react';

class FilterString extends Component{
  constructor(){
    super();

    this.state = {
      names: ['Arthur', 'Ford', 'Slartibartfast', 'Zaphod', 'DeepThought'],
      userInput: '',
      filteredNames: []
    }
  }

  handleChange(val){
    this.setState({userInput: val});
  }

  filteredResults(userInput){
    let names = this.state.names;
    let filteredNames = [];
    
    names.forEach(name => {
      if(name.includes(userInput)){
        filteredNames.push(name)
      }
    })

    this.setState({filteredNames: filteredNames})
  }

  render(){
    return(
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.names, null, 10)}</span>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.filteredResults(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredNames, null, 10)}</span>
      </div>
    )
  }
}

export default FilterString;