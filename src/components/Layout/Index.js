import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
// components
import { Reset } from 'styled-reset'
import Header from "./Header";

const StyleMain = styled.main`
  margin-top:70px;
`
const Layout = ({ children, location: { pathname }, history, route }) => {
  return (
    <>
      <Reset/>
      <Header/>
      <StyleMain>
        {children}
      </StyleMain>
    </>
  )
};
export default withRouter(Layout);