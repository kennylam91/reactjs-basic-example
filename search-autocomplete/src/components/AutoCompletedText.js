import React, { useState } from 'react';
import countries from './Countries';
import { Container, Input, SuggestionItem, SuggestionResult, SuggestionsWrapper } from './styled-components';

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
      <SuggestionsWrapper>
        {
          suggestions.map((item, index) => (
            <SuggestionItem key={index} onClick={() => selectedText(item)}>{item}</SuggestionItem>
          ))
        }
      </SuggestionsWrapper>
    )
  }


  return (
    <Container>
      <h2>Auto completed</h2>
      <Input type="text" onChange={onTextChange} value={text} color="red" />
      {renderSuggestions()}
      <SuggestionResult>suggestions: {suggestions.length}</SuggestionResult>
    </Container>
  )
}
