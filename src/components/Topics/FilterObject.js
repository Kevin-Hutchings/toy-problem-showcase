import React, { Component } from 'react';

class FilterObject extends Component {

  constructor() {
    super();

    this.state = {
      musicians: [
        {
          name: 'Glenn Gould',
          style: 'Baroque',
          instrument: 'Piano',
          variations: 'Goldberg'
        },
        {
          name: 'Valentina Lisitsa',
          style: 'Romantic',
          instrument: 'Piano'
        },
        {
          name: 'Cecilia Bartoli',
          style: 'Classical',
          instrument: 'Vocal'
        },
        {
          name: 'Monica Martin',
          style: 'Indie Pop',
          instrument: 'Vocal'
        },
        {
          name: 'Benny Goodman',
          style: 'Jazz',
          instrument: 'Clarinet'
        }
      ],


      userInput: '',
      filteredEmployees: []
    }
  }

  handleChange(val) {
    this.setState({userInput: val});
  }

  filterMusicians(prop) {
    let musicians = this.state.musicians;
    let filteredMusicians = [];

    musicians.forEach(musician => {
      if(musician.hasOwnProperty(prop)){
        filteredMusicians.push(musician)
      }
    })

    this.setState({filteredMusicians: filteredMusicians});
  }

  render(){
    return(
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText"> Original: {JSON.stringify(this.state.musicians, null, 10)} </span>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.filterMusicians(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredMusicians, null, 10)}</span>
      </div>
    )
  }
}

export default FilterObject;