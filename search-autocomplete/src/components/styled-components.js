import styled from "styled-components";

export const Container = styled.div`
  background: whitesmoke;
  position: absolute;
  left: 50%;
  margin-left: -175px;
  margin-top: 35px;
  width: 350px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: inset 1px 1px 0 white;
  max-height: 450px;
`

export const SuggestionResult = styled.span`
  display: block;
  position: absolute;
  background: #ffd32e;
  bottom: -35px;
  left: -1px;
  width: 360px;
  border-radius: 0 0 5px 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: inset 1px 1px rgba(255, 255, 255, 0.5);
`

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  font-size: 19px;
  padding: 5px;
  font-family: calibri light;
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
  color: ${props => props.color || 'black'}
`

export const SuggestionsWrapper = styled.ul`
  margin: 0 auto;
  padding: 0;
  max-height: 340px;
  overflow-y: auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 5px 5px 0 5px;
  border-left: none;
  border-right: none;
`

export const SuggestionItem = styled.li`
  list-style: none;
  background-color: rgba(0, 0, 0, 0.05);
  background-image: linear-gradient(
    90deg,
    #ffd32e 10px,
    #eee 10px,
    #eee 11px,
    transparent 11px
  );
  padding: 10px 15px 10px 25px;
  border: 1px solid #ccc;
  box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.5);
  margin-bottom: 5px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 3px;
`