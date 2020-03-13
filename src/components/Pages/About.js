import React from "react";
import styled from "styled-components";

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
`
const StyleCharacter = styled.div`
  width:350px;
  margin:80px auto 0 auto;
  .head {
    position: relative;
    margin:0 auto;
    width:150px;
    height:150px;
    .ear-left {
      position: absolute;
      top:50%;
      left:0;
      width:22px;
      height:42px;
      border-radius:50% 70% 70% 50%/50% 30% 30% 50%;
      transform:translate(-75%,-25%)rotate(-20deg);
      background:linear-gradient(to bottom,#ffcaaa,#fbb184);
      z-index:1;
      &::before {
        content:'';
        position: absolute;
        top:50%;
        left:50%;
        width:65%;
        height:65%;
        border-radius:50% 70% 70% 50%/50% 30% 30% 50%;
        transform:translate(-40%,-50%);
        background-color:#fbb991;
        z-index:1;
      }
      &::after {
        content:'';
        position: absolute;
        top:50%;
        left:50%;
        width:40%;
        height:40%;
        border-radius:50% 70% 70% 50%/50% 30% 30% 50%;
        transform:translate(-15%,-45%);
        background-color:#f9ac7d;
        z-index:2;
      }
    }
    .ear-right {
      position: absolute;
      top:50%;
      right:0;
      width:22px;
      height:42px;
      border-radius:70% 50% 50% 70%/30% 50% 50% 30%;
      transform:translate(75%,-25%)rotate(20deg);
      background:linear-gradient(to bottom,#ffcaaa,#fbb184);
      z-index:1;
      &:before {
        content:'';
        position: absolute;
        top:50%;
        left:50%;
        width:65%;
        height:65%;
        border-radius:70% 50% 50% 70%/30% 50% 50% 30%;
        transform:translate(-60%,-50%);
        background-color:#fbb991;
        z-index:1;
      }
      &:after {
        content:'';
        position: absolute;
        top:50%;
        left:50%;
        width:40%;
        height:40%;
        border-radius:70% 50% 50% 70%/30% 50% 50% 30%;
        transform:translate(-85%,-45%);
        background-color:#f9ac7d;
        z-index:2;
      }
    }
    .face {
      position: absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      border-radius:18% 65% 50% 35%/18% 35% 50% 65%;
      transform:rotate(225deg);
      background:radial-gradient(#ffcaaa,#fcb88e);
      z-index:2;
      &:before {
        content:'';
        position: absolute;
        top:47%;
        left:47%;
        width:85%;
        height:85%;
        border-radius:18% 65% 50% 35%/18% 35% 50% 65%;
        transform:translate(-50%,-50%);
        background:radial-gradient(#ffcaaa 40%,#fcb88e);
      }
    }
    .nose {
      position: absolute;
      top:53%;
      left:50%;
      width:9%;
      height:32%;
      border-radius:100% 100% 85% 85%;
      transform:translate(-50%,-25%);
      background:linear-gradient(to bottom,#ffcaaa,#fbb184);
      z-index:3;
      &:before {
        content:'';
        position: absolute;
        bottom:8%;
        left:0;
        width:80%;
        height:20%;
        border-radius:100% 50%;
        transform:translateX(-60%)rotate(10deg);
        background:linear-gradient(45deg,#ffc6a4,#fbb184);
        z-index:1;
      }
      &:after {
        content:'';
        position: absolute;
        bottom:8%;
        right:0;
        width:80%;
        height:20%;
        border-radius:50% 100%;
        transform:translateX(60%)rotate(-10deg);
        background:linear-gradient(-45deg,#ffc6a4,#fbb184);
        z-index:1;
      }
    }
  }
  .mouth-up {
    position: absolute;
    bottom:14%;
    left:50%;
    width:27%;
    height:6%;
    border-radius:50%;
    border-bottom:2px solid #fbb184;
    transform:translateX(-50%);
    background:transparent;
    z-index:4;
    &:before {
      content:'';
      position: absolute;
      width:25%;
      height:4px;
      border-radius:100% 50%;
      left:38%;
      top:70%;
      transform:translateX(-50%);
      background:#fbb184;
    };
    &:after {
      content:'';
      position: absolute;
      width:25%;
      height:4px;
      border-radius:50% 100%;
      right:38%;
      top:70%;
      transform:translateX(50%);
      background:#fbb184;
    }
  }
  .mouth-down {
    position: absolute;
    bottom:10%;
    left:50%;
    width:18%;
    height:6%;
    border-radius:50% 50% 100% 100%;
    transform:translateX(-50%);
    background:linear-gradient(to bottom,#ffc6a4,#fbb184);
    z-index:3;
  }
  .eye-right {
    position: absolute;
    right:16%;
    top:44%;
    width:25%;
    height:13%;
    border-radius:100% 50% 100% 50%/100% 50% 100% 50%;
    background:linear-gradient(to bottom,#ffc6a4 30%,#fbb184);
    z-index:3;
    &:before {
      content:'';
      position: absolute;
      top:50%;
      left:50%;
      width:85%;
      height:75%;
      border-radius:100% 50% 100% 50%/100% 50% 100% 50%;
      transform:translate(-50%,-50%);
      background:radial-gradient(#fff 40%,#fbb184);
      z-index:1;
    }
  }
  .eye-left {
    position: absolute;
    left:16%;
    top:44%;
    width:25%;
    height:13%;
    border-radius:50% 100% 50% 100%/50% 100% 50% 100%;
    background:linear-gradient(to bottom,#ffc6a4 30%,#fbb184);
    z-index:3;
    &:before {
      content:'';
      position: absolute;
      top:50%;
      left:50%;
      width:85%;
      height:75%;
      border-radius:50% 100% 50% 100%/50% 100% 50% 100%;
      transform:translate(-50%,-50%);
      background:radial-gradient(#fff 40%,#fbb184);
      z-index:1;
    }
  }
`

export default ({location: { pathname }})=> {
  const locationName = pathname.split("/");
  return (
    <StyleHome>
      <div className="title">this is <span>{locationName[1].toUpperCase()}</span></div>
      <StyleCharacter>
        <div className="head">
          <div className="face"/>
          <div className="ear-left"/>
          <div className="ear-right"/>
          <div className="nose"/>
          <div className="mouth-up"/>
          <div className="mouth-down"/>
          <div className="eye-right"/>
          <div className="eye-left"/>
        </div>
      </StyleCharacter>
    </StyleHome>
  );
};