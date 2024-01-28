import React from 'react';
import styled from 'styled-components';
const Child1 = ({myField}) => {
    return (
        <Wrapper>
           <p>(The blue color field name and the data for the `Card` component are both obtained from the parent component using props.)</p>
           <h1>{myField}</h1>
        </Wrapper>
    )
}
const Wrapper = styled.div`
width: 100%;
display:flex;
flex-direction: column;
justify-content: center;
h1{
    color: blue;
font-size: 20px;
}

`;
export default Child1
