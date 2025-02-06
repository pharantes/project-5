import styled from 'styled-components';
import Image from 'next/image';

const Bar = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: #101820;
  border: 1px solid #101820;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 2;
`
const Title = styled.h1`
  color: #FEE715;
`
import React from 'react'

export default function NavBar() {
  return (
    <Bar>
      <Title>Art Gallery</Title>
      <Image
        src={"/assets/palete.svg"}
        width={32}
        height={32}
        alt="logo icon"
      />
    </Bar>
  )
}
