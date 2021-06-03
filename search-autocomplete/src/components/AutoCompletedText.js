import React, { useState } from 'react';
import countries from './Countries';

export const AutoCompletedText = () =>  {

  const [suggestions, setSuggestions] = useState([])
  const [text, setText] = useState('')

  const onTextChange = (e) => {
    let value = e.target.value;
    let suggestions = [];
    if(value.length > 0){
      let regex = new RegExp(`^${value}`, 'i')
      suggestions = countries.sort().filter(v => regex.test(v))
    }
    setText(value)
    setSuggestions(suggestions)
  };

  const selectedText = (value) =>  {
    setText(value)
    setSuggestions([])
  };

  const renderSuggestions = () => {
    if(suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {
          suggestions.map((item, index) => (
            <li className="suggestion-item" key={index} onClick={() => selectedText(item)}>{item}</li>
          ))
        }
      </ul>
    )
  }


  return (
    <div>
      <div id="notebooks">
        <h2>Auto completed</h2>
        <input id="query" type="text" onChange={onTextChange} value={text} />
        {renderSuggestions()}
        <span>suggestions: {suggestions.length}</span>
      </div>
    </div>
  )
}
