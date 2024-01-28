import React from "react";
import Intro from "./Intro";
import styled from "styled-components";
import Work from "./Work";

const Hero = () => {
  return (
    <Wrapper className="main">
      <div className="intro">
        <Intro />
      </div>
      <Work />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  .intro {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    top: 20%;
  }
  @media screen and (max-width: 768px) {
    .intro {
      position: relative;
      top: 10%;
    }
  }
`;

export default Hero;
