import React,{ useEffect,useRef } from "react";
import styled from "styled-components";
import Head from "../Character/Head";
import Body from "../Character/Body";
import anime from "animejs";

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
  position: relative;
  width:350px;
  height:350px;
  margin:80px auto 0 auto;
  border-radius:50%;
  overflow:hidden;
  background-color:#03a9f4;
  cursor: pointer;
  .head-content {
    position: absolute;
    top:55px;
    left:50%;
    transform:translateX(-50%);
    width:150px;
    height:150px;
    z-index:2;
  }
  .body-content {
    position: absolute;
    top:190px;
    left:50%;
    transform:translateX(-50%);
    width:300px;
    height:100px;
    z-index:1;
  }
`
const characterAnimeMove = (obj)=>{
  const colors = [
    "#03a9f4",
    "#8bc34a",
    "#9400d2",
    "#e91e63",
    "#009688",
  ];
  anime({
    targets:obj,
    scale:[1.1,1],
    rotate:()=>{return anime.random(-360,360)},
    duration:()=>{return anime.random(1000,2000)},
    backgroundColor:()=>{return colors[anime.random(0,4)]}
  })
}
export default ({location: { pathname }})=> {
  const locationName = pathname.split("/");
  const animeCharacter = useRef(null);
  useEffect(()=>{
    anime({
      targets:animeCharacter.current,
      translateY:[200,0],
      scale:[0,1],
      rotate:[0,360],
      duration: function() { return anime.random(2000, 3000); },
    })
  },[])
  return (
    <StyleHome>
      <div className="title">this is <span>{locationName[1].toUpperCase()}</span></div>
      <StyleCharacter 
        ref={animeCharacter}
        onClick={()=>{characterAnimeMove(animeCharacter.current)}}
      >
        <div className="head-content"><Head/></div>
        <div className="body-content"><Body/></div>
      </StyleCharacter>
    </StyleHome>
  );
};