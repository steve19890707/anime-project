import React, { useRef, useEffect } from "react";
import styled from "styled-components";
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
  .animeBox {
    width:80px;
    height:80px;
    background-color:"#E32636";
  }
`
export default ({location: { pathname }})=> {
  const locationName = pathname.split("/");
  const animeBox = useRef(null);
  useEffect(()=>{
    anime.timeline({
      easing: 'easeInOutBack',
      duration: 800,
      loop: true
    })
    .add({
      targets: animeBox.current,
      translateX: [0,200],
      borderRadius: ['0%', '50%'],
      scale: 0.8,
      backgroundColor:'#00BFFF'
    })
    .add({
      targets: animeBox.current,
      translateY: [0,150],
      borderRadius: ['50%', '0%'],
      scale: 1,
      backgroundColor:'#000'
    })
    .add({
      targets: animeBox.current,
      translateX: [200,0],
      borderRadius: ['0%', '50%'],
      scale: 0.8,
      backgroundColor:'#66FF00'
    })
    .add({
      targets: animeBox.current,
      translateY: [150,0],
      borderRadius: ['50%', '0%'],
      scale: 1,
      backgroundColor:"#E32636"
    })
  },[animeBox])
  return (
    <StyleHome>
      <div className="title">this is <span>{locationName[1].toUpperCase()}</span></div>
      <div className="animeBox" ref={animeBox} />
    </StyleHome>
  );
};