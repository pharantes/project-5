import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const Bar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100vw;
  font-size: 18px;
  background-image: linear-gradient(260deg,  rgb(42,244,152,255) 0%, #3498db 100%); 
  border: 1px solid rgba(0,0,0,0.2);
  
`
const MainNav = styled.ul`
  list-style-type: none;
  display: flex;
  
`
const NavLi = styled.li`
  margin: 0 auto;
`
const NavLink = styled(Link)`
  list-style-type: none;

`

import React from 'react'

export default function NavBar() {
  return (
    <Bar>
      <MainNav >
        <NavLi>
          <NavLink href="/" >Gallery</NavLink>
        </NavLi>
        <NavLi>
          <NavLink href="/spotlight" >
            <Image
              src={"/assets/spotlight.svg"}
              width={20}
              height={20}
              alt="favorite icon"
            /></NavLink>
        </NavLi>
        <NavLi>
          <NavLink href="/favorites" >Favorites</NavLink>
        </NavLi>

      </MainNav>
    </Bar>
  )
}
