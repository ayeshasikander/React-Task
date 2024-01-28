import React, { useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <Wrapper>
      <div className="navbar">
        <div className="logo">
          <h1>React Task</h1>
        </div>
        <ul
          className={click ? "nav-menu" : "nav"}
          onClick={() => setClick(!click)}
        >
          <li>
            <a href="/"> React Js</a>
          </li>
          <li>
            <a href="/"> Advantage</a>
          </li>
          <li>
            <a href="/Passing Data Between React Components"> Data pass</a>
          </li>
          <li>
            <a href="/react-hooks">React Hooks</a>
          </li>
          <li>
            <a href="/context-api"> Context API</a>
          </li>
        </ul>
        <div className="hamburger" onClick={() => setClick(!click)}>
          {click ? <IoClose /> : <FaBarsStaggered />}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: aliceblue;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  .navbar {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    .logo {
      margin-left: 3rem;
    }
    ul {
      display: flex;
      list-style-type: none;
      margin-right: 3rem;
    padding: .9rem;
      li a {
        margin: 1rem;
        cursor: pointer;
        font-size: 22px;
        text-decoration: none;
        color: black;
      }
      li a:hover{
        color: blue;
      }
    }
    .hamburger {
      display: none;
    }

    @media screen and (max-width: 786px) {
      margin: 0;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      ul.nav {
        display: none;
      }
      .nav-menu {
        display: flex;
        flex-direction: column;

        li a {
          margin: 0;
          display: flex;
          flex-direction: flex-start;
        }
      }
      .hamburger {
        display: block;
        cursor: pointer;
        font-size: 2rem;
        margin-right: 1rem;
      }
    }
  }
`;
export default Header;
