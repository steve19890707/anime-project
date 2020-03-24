import React from "react";
import styled from "styled-components";
import Zaku from "../Robot/Zaku/Index";

const StyleHome = styled.div`
  width:1000px;
  margin: 0 auto;
  .title {
    padding:10px 0;
    font-weight:bold;
    font-size:20px;
    color:#757575;
    span {
      font-size:24px;
      color:#333333;
    }
  }
  .mobile-suit-content{
    width:100%;
    .zaku-content {
      width:350px;
      height:350px;
    }
  }
`
export default ({location: { pathname }})=> {
  const locationName = pathname.split("/");
  return (
    <StyleHome>
      <div className="title">this is <span>{locationName[1].toUpperCase()}</span></div>
      <div className="mobile-suit-content">
      <div className="zaku-content">
      <Zaku/>
      </div>
      </div>
    </StyleHome>
  );
};