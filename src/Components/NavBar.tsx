import React from 'react'
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const Container = styled.div`
    display: flex;
    padding: 10px;
    gap:10px;
  `;


const Wrapper = styled.div`
  `;

const Logo = styled.div`
    
`;
export default function NavBar() {
  return (
    <Container>
        <Logo>Logo</Logo>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/blog'>Blog</NavLink>
      <NavLink to='/service'>Service</NavLink>
      <NavLink to='/Gallery'>Gallery</NavLink>
    </Container>
  )
}
