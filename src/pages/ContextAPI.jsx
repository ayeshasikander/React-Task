import React,{useContext} from 'react';
import styled from 'styled-components';
import noteContext from '../context/notes/noteContext';
const ContextAPI = () => {
    const {state, update} = useContext(noteContext)
  return (
    <Wrapper>
      <h1>{state.name}</h1>
      <h2>{state.class}</h2>
      <button onClick={update}>Click</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export default ContextAPI
