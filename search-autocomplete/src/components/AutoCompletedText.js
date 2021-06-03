import React, { Component } from 'react';
import countries from './Countries';

export default class AutoCompletedText extends Component {

  constructor(props) {
    super(props)
    this.state = {
      suggestions: [],
      text: ''
    }
  }

  onTextChange = (e) => {
    let value = e.target.value;
    let suggestions = [];
    if(value.length > 0){
      let regex = new RegExp(`^${value}`, 'i')
      suggestions = countries.sort().filter(v => regex.test(v))
    }

    this.setState(() => ({
      suggestions, 
      text: value
    }))
  }

  selectedText(value) {
    this.setState(() => ({
      text: value,
      suggestions: []
    }))
  }

  renderSuggestions = () => {
    let {suggestions} = this.state;
    if(suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {
          suggestions.map((item, index) => (
            <li className="suggestion-item" key={index} onClick={() => this.selectedText(item)}>{item}</li>
          ))
        }
      </ul>
    )
  }


  render() {
    const {text, suggestions} = this.state;
    return (
      <div>
        <div id="notebooks">
          <h2>Auto completed</h2>
          <input id="query" type="text" onChange={this.onTextChange} value={text} />
          {this.renderSuggestions()}
          <span>suggestions: {suggestions.length}</span>
        </div>
      </div>
    )
  }
}
