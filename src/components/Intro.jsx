import React from "react";
import reactimg from "../assets/React.png";
import styled from "styled-components";
const intro = () => {
  return (
    <Wrapper>
      <div className="reactimg">
        <img src={reactimg} alt="" />
      </div>
      <div className="question">
        <h1>What is react.js? and How it Works?</h1>
      </div>

      <div className="answer">
        React Js is a <span> JavaScript library </span> for building user
        interfaces. It is maintained by Facebook and a community of individual
        developers and companies. React Js is used to build single-page
        applications and mobile applications. It's a component based meaning you
        builed encapsulated components that manage their own state,then compose
        them to make complex UIs. React uses a virtual DOM to efficently update
        and render UI components when data changes, it calculates the
        differences in the virtual DOM and updates the actual DOM and only
        re-renders the changed parts.
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  width: 70%;
  position: absolute;
  .answer {
    font-size: 18px;
    span {
      font-size: 20px;
      font-weight: bold;
      color: blue;
    }
  }
  .reactimg {
    img {
      width: 200px;
    }
  }
`;
export default intro;
