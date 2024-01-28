import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import reactimg from '../assets/React.png';

const Hooks = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count])


    
  return (
    <Wrapper>
      <div className='page'>
        <h1>React Hooks</h1>
        <p>Hook is a programming concept to manage state o rlifecycle methods in functional components.</p>

        <h3>Here are the names of the most commonly used hooks:</h3>
        <ul>
          <li>useState</li>
          <li>useEffect</li>
          <li>useRef</li>
          <li>useCallback</li>
          <li>useMemo</li>
          <li>useContext</li>
          <li>useReducer</li>
        </ul>
      </div>
      <div className="use-ref">
        <img src={reactimg} alt="" />
      </div>
      <div className="work">
        <h3>Here's an example of how to use the useState hook</h3>
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
        
      </div>
     
    </Wrapper>
  )
}
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
.use-ref{
  img{
    width: 200px;
  }
}
@media screen and (max-width: 768px) {
  display: flex;
  flex-direction: column;
}
`;

export default Hooks
