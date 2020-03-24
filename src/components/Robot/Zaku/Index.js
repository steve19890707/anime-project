import React from "react";
import styled from "styled-components";
import Head from "./Head";

const StyleZaku = styled.div`
  position: relative;
  width:100%;
  height:100%;
  .head-content {
    position: absolute;
    top:10%;
    left:50%;
    transform:translateX(-50%);
    width:60%;
    height:40%;
  }
`
export default ()=>{
  return (
    <StyleZaku>
      <div className="head-content"><Head/></div>
    </StyleZaku>
  )
}