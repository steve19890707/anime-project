import React from "react";
import styled from "styled-components";
const mainColor = `#6da06d`;
const mainColorShadow = `#529452`;
const mainColorDeepShadow = `#487d48`;
const StyleZakuHead = styled.div`
  position: relative;
  width:100%;
  height:100%;
  .up-cover {
    position: absolute;
    top:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:100px 100px 0px 0px;
    width:75%;
    height:45%;
    background-color: ${mainColorShadow};
    &:before{
      content:'';
      position: absolute;
      top:0;
      right:0;
      width:100%;
      height:100%;
      border-radius:100px 100px 0 0;
      background-color:${mainColor};
      transform:scale(0.5,1);
    }
  }
  .eye-area {
    position: absolute;
    top:45%;
    left:50%;
    transform:translateX(-50%);
    width:75%;
    height:25%;
    background-color:#000;
    .content {
      position: relative;
      width:100%;
      height:100%;
      &:before {
        content:'';
        position: absolute;
        top:0;
        left:0;
        width:15%;
        height:100%;
        background:${mainColorDeepShadow};
      }
      &:after {
        content:'';
        position: absolute;
        top:0;
        right:0;
        width:15%;
        height:100%;
        background:${mainColorDeepShadow};
      }
      .eye {
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:20%;
        height:93%;
        border-radius:50%;
        background-color:#d63c3c;
        &:before {
          content:'';
          position: absolute;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
          width:80%;
          height:80%;
          border-radius:50%;
          background-color:#ff6c6c;;
        }
        /* box-shadow:0 0 10px rgb(255,0,0,0.8); */
      }
    }
  }
  .down-mouth {
    position: absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    width:75%;
    height:30%;
    .content {
      position: relative;
      width:100%;
      height:100%;
      .down-cover {
        position: absolute;
        width:100%;
        height:80%;
        background-color:${mainColorShadow};
        border-radius:0 0 100px 100px;
        z-index:1;
      }
      .main-tube {
        position: absolute;
        top:45%;
        left:50%;
        transform:translate(-50%,-50%);
        width:55%;
        height:100%;
        border-radius:15px;
        background-color:${mainColor};
        z-index:2;
        &:before {
          content:'';
          position: absolute;
          top:0;
          right:0;
          width:15%;
          height:100%;
          border-radius:0 15px 15px 0;
          background-color:${mainColorDeepShadow};
        };
        &:after {
          content:'';
          position: absolute;
          top:0;
          left:0;
          width:15%;
          height:100%;
          border-radius:15px 0 0 15px;
          background-color:${mainColorDeepShadow};
        };
      }
      .mouth-lips {
        position: absolute;
        bottom:0;
        left:50%;
        transform:translate(-50%,0);
        width:30%;
        height:65%;
        background-color:${mainColorDeepShadow};
        z-index:3;
      }
      .mouth {
        position: absolute;
        bottom:0;
        left:50%;
        transform:translate(-50%,45%);
        width:30%;
        height:60%;
        border-radius:5px;
        background-color:${mainColorDeepShadow};
        z-index:4;
        &:before {
          content:'';
          position: absolute;
          top:50%;
          left:50%;
          width:65%;
          height:70%;
          transform:translate(-50%,-50%);
          background-color:#000;
        }
      }
      .tube1-left {
        position: absolute;
        top:45%;
        left:5%;
        transform:translateY(-50%);
        width:15%;
        height:60%;
        border-radius:5px;
        background-color:${mainColor};
        z-index:3;
        &::before {
          content:'';
          position: absolute;
          top:50%;
          right:0;
          transform:translate(100%,-50%);
          width:20%;
          height:80%;
          background-color:#000;
        }
        &::after {
          content:'';
          position: absolute;
          top:50%;
          left:0;
          transform:translate(-100%,-50%);
          width:20%;
          height:80%;
          background-color:#000;
        }
      }
      .tube1-right {
        position: absolute;
        top:45%;
        right:5%;
        transform:translateY(-50%);
        width:15%;
        height:60%;
        border-radius:5px;
        background-color:${mainColor};
        z-index:3;
        &::before {
          content:'';
          position: absolute;
          top:50%;
          right:0;
          transform:translate(100%,-50%);
          width:20%;
          height:80%;
          background-color:#000;
        }
        &::after {
          content:'';
          position: absolute;
          top:50%;
          left:0;
          transform:translate(-100%,-50%);
          width:20%;
          height:80%;
          background-color:#000;
        }
      }
    }
  }
`
export default ()=>{
  return (
    <StyleZakuHead>
      <div className="up-cover"/>
      <div className="eye-area">
        <div className="content">
          <div className="eye"/>
        </div>
      </div>
      <div className="down-mouth">
        <div className="content">
          <div className="down-cover"/>
          <div className="main-tube"/>
          <div className="mouth-lips"/>
          <div className="mouth"/>
          <div className="tube1-left"/>
          <div className="tube1-right"/>
        </div>
      </div>
    </StyleZakuHead>
  )
}