import React,{ useEffect,useRef } from "react";
import styled from "styled-components";
import anime from "animejs";

const StyleHead = styled.div`
  position: relative;
  top:0;
  margin:0 auto;
  width:150px;
  height:150px;
  z-index:2; 
  .ear-left {
    position: absolute;
    top:55%;
    left:5%;
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
      background-color:#e69d70;
      z-index:2;
    }
  }
  .ear-right {
    position: absolute;
    top:55%;
    right:5%;
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
      background-color:#e69d70;
      z-index:2;
    }
  }
  .frontHair {
    position: absolute;
    width:150px;
    height:150px;
    top:0;
    z-index:5;
    .inset {
      position:relative;
      width:100%;
      height:100%;
      &:before {
        content:'';
        position: absolute;
        width:10%;
        height:35%;
        left:0;
        top:50%;
        border-radius:50%;
        border-left:5px solid #000;
        transform:translate(-20%,-50%)rotate(-12deg);
        z-index:1;
      }
      &:after {
        content:'';
        position: absolute;
        width:10%;
        height:35%;
        right:0;
        top:50%;
        border-radius:50%;
        border-right:5px solid #000;
        transform:translate(20%,-50%)rotate(12deg);
        z-index:1;
      }
      .left {
        position: absolute;
        z-index:2;
        left:0;
        top:0;
        width:80%;
        height:40%;
        border-radius:50%;
        transform:translate(-15%,-12%)rotate(-50deg);
        border-top:3rem solid #000;
      }
      .left-in1 {
        position: absolute;
        z-index:2;
        left:0;
        top:0;
        width:60%;
        height:32%;
        border-radius:50%;
        transform:translate(7%,-17%)rotate(-50deg);
        border-top:3rem solid #1D1D1C;
      }
      .left-in2 {
        position: absolute;
        z-index:2;
        left:0;
        top:0;
        width:50%;
        height:32%;
        border-radius:50%;
        transform:translate(43%,-17%)rotate(-45deg);
        border-top:3rem solid #232323;
      }
      .left-in3 {
        position: absolute;
        z-index:2;
        left:0;
        top:0;
        width:50%;
        height:30%;
        border-radius:50%;
        transform:translate(70%,-27%)rotate(-45deg);
        border-top:3rem solid #1D1D1C;
        z-index:3
      }
      .right {
        position: absolute;
        z-index:2;
        right:0;
        top:0;
        width:80%;
        height:40%;
        border-radius:50%;
        border-top:3rem solid #1D1D1C;
        transform:translate(15%,-12%)rotate(50deg)
      }
    }
  }
  .backHair {
    position: absolute;
    width:150px;
    height:150px;
    top:0;
    z-index:1;
    &:before {
      content:'';
      position: absolute;
      top:46%;
      left:50%;
      transform:translate(-50%,-50%);
      width:108%;
      height:100%;
      border-radius:80% 80% 100% 100%;
      background-color:#000;
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
    background:radial-gradient(#fbcfb5,#ffad7a);
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
      background:radial-gradient(#ffcaaa 30%,#fcb88e);
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
    background:linear-gradient(to bottom,#ffcaaa,#fbb184 85%,#e69d70);
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
      background:linear-gradient(180deg,#fbb184 50%,#e69d70);
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
      background:linear-gradient(-180deg,#fbb184 50%,#e69d70);
      z-index:1;
    }
  }
  .mouth-up {
    position: absolute;
    bottom:13%;
    left:50%;
    width:27%;
    height:6%;
    border-radius:0%;
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
    bottom:9%;
    left:50%;
    width:18%;
    height:6%;
    border-radius:50% 50% 100% 100%;
    transform:translateX(-50%);
    background:linear-gradient(to bottom,#ffc6a4,#fbb184);
    z-index:3;
  }
  .eyebrow-right {
    position: absolute;
    right:16%;
    top:35%;
    width:26%;
    height:14%;
    border-radius:50%;
    border-top:3px solid #000;
    z-index:3;
    transform:rotate(-10deg);
  }
  .eyecover-right {
    position: absolute;
    top:45%;
    right:16%;
    width:25%;
    height:13%;
    border-top:4px solid #d8834f;
    border-radius:50%;
    transform:rotate(-8deg);
    z-index:4;
  }
  .eye-right {
    position: absolute;
    right:16%;
    top:45%;
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
    .eye-ball {
      position:relative;
      width:100%;
      height:100%;
      z-index:1;
      .eye-index1 {
        position:absolute;
        top:50%;
        left:42%;
        transform:translate(-50%,-50%);
        border-radius:50%;
        background:radial-gradient(#fff 30%,#462a00);
        width:30%;
        height:60%;
        z-index:1;
      }
      .eye-index2 {
        position:absolute;
        top:50%;
        left:42%;
        transform:translate(-50%,-50%);
        border-radius:50%;
        background:radial-gradient(#000 15%,#462a00);
        width:15%;
        height:30%;
        z-index:2;
      }
      .eye-index3 {
        position:absolute;
        top:45%;
        left:52%;
        transform:translate(-50%,-50%);
        border-radius:50%;
        background:#fff;
        width:10%;
        height:20%;
        z-index:3;
      }
    }
  }
  .eyebrow-left {
    position: absolute;
    left:16%;
    top:35%;
    width:26%;
    height:14%;
    border-radius:50%;
    border-top:3px solid #000;
    z-index:3;
    transform:rotate(10deg);
  }
  .eyecover-left {
    position: absolute;
    left:16%;
    top:45%;
    width:25%;
    height:13%;
    border-top:4px solid #d8834f;
    border-radius:50%;
    transform:rotate(8deg);
    z-index:4;
  }
  .eye-left {
    position: absolute;
    left:16%;
    top:45%;
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
    .eye-ball {
      position:relative;
      width:100%;
      height:100%;
      z-index:1;
      .eye-index4 {
        position: absolute;
        width:100%;
        height:100%;
        border-top:4px solid #d8834f;
        border-radius:50%;
        transform:rotate(8deg);
        z-index:4;
      }
      .eye-index1 {
        position:absolute;
        top:50%;
        left:54%;
        transform:translate(-50%,-50%);
        border-radius:50%;
        background:radial-gradient(#fff 30%,#462a00);
        width:30%;
        height:60%;
        z-index:1;
      }
      .eye-index2 {
        position:absolute;
        top:50%;
        left:54%;
        transform:translate(-50%,-50%);
        border-radius:50%;
        background:radial-gradient(#000 15%,#462a00);
        width:15%;
        height:30%;
        z-index:2;
      }
      .eye-index3 {
        position:absolute;
        top:45%;
        left:64%;
        transform:translate(-50%,-50%);
        border-radius:50%;
        background:#fff;
        width:10%;
        height:20%;
        z-index:3;
      }
    }
  }
  .glasses {
    position: absolute;
    top:42%;
    left:50%;
    transform:translateX(-50%);
    width:85%;
    height:30px;
    z-index:4;
    .glasses-content {
      position: relative;
      width:100%;
      height:100%;
      .middle {
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:12%;
        height:10%;
        background-color:#000;
      }
      .glasses-right {
        position: absolute;
        right:5%;
        top:50%;
        transform:translateY(-50%);
        width:40%;
        height:100%;
        border-radius:5px;
        box-sizing:border-box;
        border:5px solid #000;
      }
      .glasses-left {
        position: absolute;
        left:5%;
        top:50%;
        transform:translateY(-50%);
        width:40%;
        height:100%;
        border-radius:5px;
        box-sizing:border-box;
        border:5px solid #000;
      }
      &:before {
        content:'';
        position: absolute;
        left:0;
        top:50%;
        transform:translate(-50%,-50%);
        width:15%;
        height:10%;
        background-color:#000;
      }
      &:after {
        content:'';
        position: absolute;
        right:0;
        top:50%;
        transform:translate(50%,-50%);
        width:15%;
        height:10%;
        background-color:#000;
      }
    }
  }
`
const animeEyeMove = (obj)=>{
  anime.timeline({
    delay:1000,
    targets:obj,
    loop: true
  }).add({
    duration: 2000,
    translateX: [0,4],
    translateY: [0,-1],
  }).add({
    duration: 2000,
    translateX: [4,0],
    translateY: [-1,0],
  }).add({
    duration: 2000,
    translateX: [0,-4],
    translateY: [0,-1],
  }).add({
    duration: 2000,
    translateX: [-4,0],
    translateY: [-1,0],
  })
};
const animeEyebrowMove =(obj)=>{
  anime.timeline({
    delay:()=>{return anime.random(500,1000)},
    targets:obj,
    loop: true
  }).add({
    duration: 2000,
    translateY: [0,-5],
  }).add({
    duration: 2000,
    translateY: [-5,0],
  })
};
const animeMouthMove = (obj)=>{
  anime.timeline({
    delay:()=>{return anime.random(500,1000)},
    targets:obj,
    loop: true
  }).add({
    duration: 2000,
    borderRadius: [0,50],
  }).add({
    duration: 2000,
    borderRadius: [50,0],
  })
};
const animeHeadMove = (obj)=>{
  anime.timeline({
    delay:()=>{return anime.random(500,1000)},
    targets:obj,
    loop: true
  }).add({
    duration: 2000,
    rotate: [0,-8],
  }).add({
    duration: 2000,
    rotate: [-8,0],
  }).add({
    duration: 2000,
    rotate: [0,8],
  }).add({
    duration: 2000,
    rotate: [8,0],
  })
}
export default ()=>{
  const animeHead = useRef(null);
  const animeRightEye = useRef(null);
  const animeLeftEye = useRef(null);
  const animeRightEyebrow = useRef(null);
  const animeLeftEyebrow = useRef(null);
  const animeMouth = useRef(null);
  useEffect(()=>{
    animeEyeMove(animeRightEye.current);
    animeEyeMove(animeLeftEye.current);
    animeEyebrowMove(animeRightEyebrow.current);
    animeEyebrowMove(animeLeftEyebrow.current);
    animeMouthMove(animeMouth.current);
    animeHeadMove(animeHead.current);
  },[]);
  return (
    <StyleHead ref={animeHead}>
      <div className="frontHair">
        <div className="inset">
          <div className="left"/>
          <div className="left-in1"/>
          <div className="left-in2"/>
          <div className="left-in3"/>
          <div className="right"/>
        </div>
      </div>
      <div className="backHair"/>
      <div className="face"/>
      <div className="ear-left"/>
      <div className="ear-right"/>
      <div className="nose"/>
      <div className="mouth-up" ref={animeMouth}/>
      <div className="mouth-down"/>
      <div className="eyebrow-right" ref={animeRightEyebrow}/>
      <div className="eyecover-right"/>
      <div className="eye-right">
        <div className="eye-ball" ref={animeRightEye}>
          <div className="eye-index1"/>
          <div className="eye-index2"/>
          <div className="eye-index3"/>
        </div>
      </div>
      <div className="eyebrow-left" ref={animeLeftEyebrow}/>
      <div className="eyecover-left"/>
      <div className="eye-left">
        <div className="eye-ball" ref={animeLeftEye}>
          <div className="eye-index1"/>
          <div className="eye-index2"/>
          <div className="eye-index3"/>
        </div>
      </div>
      <div className="glasses">
        <div className="glasses-content">
          <div className="middle"/>
          <div className="glasses-left"/>
          <div className="glasses-right"/>
        </div>
      </div>
    </StyleHead>
  )
}