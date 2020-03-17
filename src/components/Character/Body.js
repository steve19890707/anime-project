import React from "react";
import styled from "styled-components";

const StyleBody = styled.div`
  position: relative;
  width:300px;
  height:100px;
  .neck {
    position: absolute;
    top:0;
    left:50%;
    transform:translateX(-50%);
    width:15%;
    height:65%;
    background:linear-gradient(to bottom,#f77f37,#fbb991);
    border-radius:20% 20% 50% 50%;
    z-index:2;
  }
  .body {
    position: absolute;
    top:20%;
    left:50%;
    transform:translateX(-50%);
    width:80%;
    height:140%;
    background-color:#000;
    border-radius:40% 40% 0 0;
    z-index:1;
  }
  .text {
    font-family: 'Press Start 2P', cursive;
    font-size:12px;
    white-space: nowrap;
    color:#fff;
    position: absolute;
    top:90%;
    left:50%;
    transform:translateX(-50%);
    z-index:2;
  }
`
export default ()=>{
  const textContent=`<CODING LIFE/>`
  return (
    <StyleBody>
      <div className="neck"/>
      <div className="body"/>
      <div className="text">{textContent}</div>
    </StyleBody>
  )
}