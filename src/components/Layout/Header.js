import React, { useMemo } from "react";
import styled from "styled-components";
import anime from "animejs";
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
  .logo { cursor: pointer; }
  .svg-logo {
    fill:#00e5fb;
    width:40px;
    height:40px;
    pointer-events:none;
  }
  .link-list {
    display:flex;
    li {
      display:inline-block;
      color:#fff;
      font-size:14px;
      margin-right:20px;
      cursor: pointer;
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
  const CreateHeaderList = useMemo(()=>{
    const headerList = [ "home","about","other" ];
    return headerList.map((value,index)=>{
      const linkHerf = `/${value}`
      return (
        <li key={index}>
          <Link 
            to={linkHerf}
            onClick={(e)=>{
              anime.timeline({
                targets: e.target,
              }).add({
                translateY:[0,-10],
                easing: 'linear',
                duration: 100
              }).add({
                translateY:[-10,0],
                easing: 'easeOutBounce',
                duration: 900
              })
            }}
          >{value.toUpperCase()}</Link>
        </li>
      );
    });
  },[]);
  return (
    <StyleHeader>
      <div className="wrap">
        <div 
          className="logo"
          onClick={(e)=>{
            anime({
              targets: e.target,
              rotate: {
                value: [0,360],
                duration: 800,
                easing: 'easeOutBack',
              }
            })
          }}
        >
          <GiDivingHelmet className="svg-logo"/>
        </div>
        <ul className="link-list">{CreateHeaderList}</ul>
      </div>
    </StyleHeader>
  )
};