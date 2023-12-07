import React from 'react';
import styled from 'styled-components';
import { CarouselAuto } from './carouselAuto';
import image1 from '../assets/precar1.jpg';
import image2 from '../assets/precar2.jpg';
import image3 from '../assets/precar3.jpg';
import image4 from '../assets/precar4.jpg';
import image5 from '../assets/precar5.jpg';

const images = [image1, image2, image3, image4, image5]

export function PremiumComponent() {

const Parent = styled.div`
  margin-top:5vh;
  position: relative;
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;

const Left = styled.div`
  position: relative;
  top:-20vh;
  left: -10vw;
  width: 35vw;
  height: 40vh;
  text-align: center;
`;

const Right = styled.div`
  position: relative;
  width: 34vw;
  height: 30vw;
  top:6vh;
  left:8vh;
  overflow: hidden;
`;

const Heading = styled.h1 `
    height: 40vh;
    padding: 2vh 2vw;
    display: flex;
    align-items: center;
    border:1px solid black;
`
const PargraphBox = styled.div `
    position: absolute;
    top: 80%;
    left:50%;
    transform: translateX(-50%);
    background-color: white;
    width: 25vw;
    height:30vh;
    display: flex;
    flex-direction: column;
    padding-top: 3vh;
    align-items: center;
    border:1px solid black;
`

const Each = styled.p`
    height:6.5vh;
    width:20vw;
    border:1px solid black;
`




  return (
    <>
    <Parent>
      <Left>
        <Heading>Get SnapCanvas Premium Today</Heading>
        <PargraphBox>
            <Each><strong>+</strong> Quality</Each>
            <Each><strong>+</strong> Priority</Each>
            <Each><strong>+</strong> Ad-Free</Each>
            <Each><strong>+</strong> Exclusive</Each>
        </PargraphBox>
      </Left>
      <Right>
        <CarouselAuto customImages={images}/>
      </Right>
    </Parent>
    </>
  );
}