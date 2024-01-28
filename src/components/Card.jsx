import React from 'react';
import styled from 'styled-components';

const Card = ({data}) => {
    return (
        <Wrapper>
            <div className="card">
                <div className="tools">
                    <div className="circle">
                        <span className="red box"></span>
                    </div>
                    <div className="circle">
                        <span className="yellow box"></span>
                    </div>
                    <div className="circle">
                        <span className="green box"></span>
                    </div>
                </div>
                <div className="card__content">
                    <p className="title">{data.name}</p>
                    <hr />
                    <p className="content">
                        {data.field}
                    </p> 
                    <p className="content">
                        {data.age}
                    </p>
                    <p className="content">
                        {data.gender}
                    </p>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.card {
  width: 190px;
  height: 254px;
  margin: 1rem;
  background-color: #f4f4f3;
  border-radius: 8px;
  border: 1px solid #2D3035;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
}

.card::after {
  position: absolute;
  content: '';
  background-color: #2D3035;
  width: 50px;
  height: 100px;
  z-index: -1;
  border-radius: 8px;
}

.tools {
  display: flex;
  align-items: center;
  padding: 9px;
  border-radius: 8px;
  background: #2D3035;
  margin-top: -2px;
}

.circle {
  padding: 0 4px;
}

.card__content {
  height: 100%;
  margin: 0px;
  border-radius: 8px;
  background: #f4f4f3;
  padding: 10px;
}

.title {
  font-size: 20px;
}

.content {
  margin-top: 10px;
  font-size: 14px;
}

.box {
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
}

.red {
  background-color: #ff605c;
}

.yellow {
  background-color: #ffbd44;
}

.green {
  background-color: #00ca4e;
}
`;
export default Card
