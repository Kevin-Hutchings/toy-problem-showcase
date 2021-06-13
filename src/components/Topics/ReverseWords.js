import React, {Component} from 'react';

export default class ReverseWords extends Component{
   constructor(){
      super();

      this.state = {
         userInput: '',
         reversed: ''
      }
   }

   handleChange(val) {
      this.setState({userInput: val});
   }

   reversedWords(str){
      this.setState({reversed: str.split("").reverse().join("").split(" ").reverse().join(" ")});
   }

   render() {
      return(
         <div className="puzzleBox filterStringPB">
            <h4>Reverse Words</h4>
            <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
            <button className="confirmationButton" onClick={() => this.reversedWords(this.state.userInput)}>Reverse</button>
            <span className="resultsBox">Reversed: {this.state.reversed}</span>
         </div>
      )
   }
}