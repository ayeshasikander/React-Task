import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Child1 from "./Child1";
import Child2 from "./Child2";
const DataPass = () => {
  const myField = "Front End Development using React js";
  const myName = [
    {
      id: 1,
      name: "Ayesha Sikander",
      age: 22,
      gender: "female",
      field: "Front End Developer",
    },
    {
      id: 2,
      name: "Abeera",
      age: 20,
      gender: "female",
      field: "Full stack Developer",
    },
    {
      id: 3,
      name: "Sidra",
      age: 18,
      gender: "female",
      field: "Web Developer",
    },
  ];

  const [dataFromChild, setDataFromChild] = useState(
    "Click Me  for getting data from child to parent"
  );
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <Wrapper>
      <div className="main-heading">
        <img
          src="https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/Colorful-Animal-Crossing-Icons-Icon-Set-2.png"
          alt=""
        />
        <h1>
          Passing Data Between React Components — Parent, Children, Siblings
        </h1>
        <div className="data">
          <li>From Parent to Child using Props</li>
          <li>From Child to Parent using Callbacks</li>
          <li>Between Siblings Using React’s Context API</li>
        </div>
      </div>
      <div className="method1">
        <h1>From Parent to Child using Props</h1>
        <Child1 myField={myField} />
        <div className="parent-to-child">
          <div className="card">
            <div className="child-A">
              {myName.map((data) => (
                <Card key={data.id} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="method2">
        <h1>From Child to Parent using Callbacks</h1>
        <div className="child-to-parent">
          <div className="card">
            <div className="child-B">
              <Child2 onChildtoParent={handleDataFromChild} />
              <h1>Data from Parent: {dataFromChild}</h1>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="method3">
        <h1>Between Siblings Using React’s Context API</h1>
        <div className="section">
          <div className="q5">
            <h2>Question 5:What is Context API?</h2>
            <p>
              Context API is a feature in React that allows you to create global
              variables and pass data through the component tree without having
              to pass props down manually at every level. This can be
              particularly useful for sharing state across the entire app or
              part of it.
            </p>
            <div className="concept">
              <span>For understanding what is Context API, we need to understand three terms.</span>
              <div className="concept-list">
                <li>Create</li>
                <li>Provider</li>
                <li>Consumer</li>
              </div>
              <p>Without passing data in navbar or child A,We can access data directly in child B from Parent.</p>
             
            </div>
          </div>
          <div className="example">
            <img
              src="https://blogs.perficient.com/files/context-1-263x300.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  img {
    max-width: 70%;
  }
  .method1 {
    width: 100%;
    .parent-to-child {
      .child-A {
        display: flex;
        justify-content: center;
      }
    }
  }
  .method3 {
    width: 100%;

    .section {
      display: flex;
      width: 100%;
    }
    .q5 {
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      margin: 2rem;
      p {
        font-size: 18px;
      }
    }
    .example {
      width: 50%;
    }
  }
  @media screen and (max-width: 768px) {
    .method1 {
      width: 100%;
      .parent-to-child {
        .child-A {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .method3 {
      width: 100%;

      .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
      .q5 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80%;
        margin: 0;
      }
      .example {
        width: 100%;
      }
    }
  }
`;

export default DataPass;
