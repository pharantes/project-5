import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const Bar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100vw;
  background-color: #101820;
  border: 1px solid rgba(0,0,0,0.2);
`
const MainNav = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
`
import React from 'react'

export default function NavBar() {
  return (
    <Bar>
      <MainNav >
        <li>
          <Link href="/" ><Image
            src={"/assets/home.svg"}
            width={26}
            height={26}
            alt="home icon"
          /></Link>
        </li>
        <li>
          <Link href="/spotlight" >
            <Image
              src={"/assets/palete.svg"}
              width={26}
              height={26}
              alt="palete icon"
            /></Link>
        </li>
        <li>
          <Link href="/favorites" >
            <Image
              src={"/assets/favorite.svg"}
              width={26}
              height={26}
              alt="favorite icon"
            />
          </Link>
        </li>
      </MainNav>
    </Bar>
  )
}
