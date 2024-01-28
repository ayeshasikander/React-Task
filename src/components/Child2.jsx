import React from 'react';
import styled from 'styled-components';
const Child2 = ({onChildtoParent}) => {
    const handleClick = () => {
        onChildtoParent("Hi, I am Ayesha and I am from Child 2");
    }

    return (
        <Wrapper>
            <div className="form">
                <h2>Child to Parent</h2>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .form{
        border: 1px solid black;
        padding: 1rem;
        margin: 2rem;

    }
`;

export default Child2
