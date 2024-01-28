import React from "react";
import styled from "styled-components";
const Work = () => {
  return (
    <WorkContainer className="work" id="advantages">
      <h1>Advantages of React Js</h1>
      <div className="answer">
        <div className="content">
          <h1>Efficient Rendering:</h1>
          <p>
            React uses a virtual DOM to track changes in the user interface.
            When a change is made, React updates only the parts of the DOM that
            have actually changed, resulting in faster and more efficient
            rendering.
          </p>
        </div>

        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20230725135348/Browser-DOM-Virtual-DOM-copy.webp"
          alt=""
        />
      </div>
      <hr />
      <div className="answer">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*3XT8dBv3i0qhyHI0KczCfQ.png"
          alt=""
        />

        <div className="content">
          <h1>Reuseable Components:</h1>
          <p>
            React applications are built using components, which are reusable,
            self-contained pieces of code that define a part of the user
            interface. Components can be nested within other components to
            create complex UIs.{" "}
          </p>
          <p>
            React.js uses a component-based architecture, which allows
            developers to build complex user interfaces by breaking them down
            into smaller, reusable components. This makes it easier to manage
            and maintain code, as well as to test and debug applications.
          </p>
        </div>
      </div>
      <hr />
      <div className="answer">
        <div className="content">
          <h1>SEO Friendly:</h1>
          <p>
            React.js applications can be easily rendered on the server, making
            them more SEO-friendly than traditional JavaScript frameworks. This
            is because search engines can easily read and index server-rendered
            content, which can improve your website's visibility and ranking on
            search engine results pages.
          </p>
        </div>
        <img
          src="https://miro.medium.com/v2/resize:fit:1358/1*UhdsRrdU1QDXOw9hhjXKVA.jpeg"
          alt=""
        />
      </div>
    </WorkContainer>
  );
};
const WorkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100%;
  hr {
    width: 80%;
    height: 2px;
    background-color: black;
  }
  .answer {
    margin: 1rem;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    img {
      width: 60%;
    }
  }
  @media screen and (max-width: 768px) {
    .answer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 5rem;
    }
  }
`;

export default Work;
