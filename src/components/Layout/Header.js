import React from "react";
import styled from "styled-components";
import { GiDivingHelmet } from "react-icons/gi";
import { Link } from "react-router-dom";

const StyleHeader = styled.header`
  position:fixed;
  top:0;
  width:100%;
  height:70px;
  padding:15px 0;
  box-sizing:border-box;
  background-color:#000;
  .wrap {
    width:1000px;
    margin: 0 auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
  };
  .svg-logo {
    fill:#00e5fb;
    width:40px;
    height:40px;
    cursor: pointer;
  }
  .link-list {
    display:flex;
    li {
      display:inline-block;
      color:#fff;
      font-size:14px;
      margin-right:20px;
      transition:.2s;
      cursor: pointer;
      &:hover { opacity:0.6; }
      &:last-child { margin-right:0; }
    };
    a { 
      display:block;
      color:unset;
      text-decoration:none;
    };
  };
`
export default ()=> {
  return (
    <StyleHeader>
      <div className="wrap">
        <GiDivingHelmet className="svg-logo"/>
        <ul className="link-list">
          <li ><Link to="/home">HOME</Link></li>
          <li ><Link to="/other">OTHER</Link></li>
        </ul>
      </div>
    </StyleHeader>
  )
};