import React from 'react';
import styled from 'styled-components';
import { CarouselAuto } from './carouselAuto';
import image1 from '../assets/precar1.jpg';
import image2 from '../assets/precar2.jpg';
import image3 from '../assets/precar3.jpg';
import image4 from '../assets/precar4.jpg';
import image5 from '../assets/precar5.jpg';

const images = [image1, image2, image3, image4, image5]

export function PremiumComponent1() {

const Parent = styled.div`
  margin-top:5vh;
  position: relative;
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgb(221, 221, 221);

`;

const Small = styled.div`
  height: 8vh;
  width: 15vh;
  border-radius:%;
  display: flex;
  align-items: center;
  justify-content: center;
  border:1px solid black;
  background-color:#faf6eb
`

const Box = styled.div`
  display: flex;
  height: 16vh;
  justify-content: space-evenly;
  border:1px solid black;
  padding:3vh 0;
  margin-bottom:2vh;
  align-items:center;
  background-color:white;
  
`

const Right = styled.div`
  position: relative;
  width: 34vw;
  height: 80vh;
  top:8vh;
  left:8vh;
  display: flex;
  flex-direction: column;
`

const Left = styled.div`
  position: relative;

  width: 35vw;
  height: 40vh;
  text-align: center;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 34vw;
  height: 30vw;
  overflow: hidden;
`;

const Heading = styled.h1 `
    height: 40vh;
    padding: 2vh 2vw;
    display: flex;
    align-items: center;
    border:1px solid black;
    background-color:black;
    opacity: 80%;
    color:white;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    gap:1px;
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

const GradientSpan = styled.span`
 background: linear-gradient(to left, rgb(0, 224, 255) 0%, rgb(250, 0, 255) 33%, rgb(0, 224, 255) 66%, rgb(250, 0, 255) 100%);
  -webkit-background-clip: text; /* For older WebKit browsers */
  background-clip: text;
  margin-left:16px;
  margin-bottom:0;
  padding:0;
  color: transparent;
  display: inline-block; /* Ensures that the gradient spans only the text content */
  -webkit-text-fill-color: transparent; /* Fallback color for browsers that don't support background-clip: text */
`;

const PositionDiv = styled.div `
  position:relative;
  top:-8vh;
`
const Border = styled.div `
  border: 1px solid black;
  padding:2vh;
  position: relative;
  top:-6vh;
  left: -6vw;
  height: 70vh;
  background-color:#faf6eb
`







  return (
    <>
    <Parent>
      <Border>
      <Left>
        <Heading>
          Get <GradientSpan>SnapCanvas</GradientSpan> <PositionDiv>Premium Today</PositionDiv>
        </Heading>
        <PargraphBox>
            <Each><strong>+</strong> Quality</Each>
            <Each><strong>+</strong> Priority</Each>
            <Each><strong>+</strong> Ad-Free</Each>
            <Each><strong>+</strong> Exclusive</Each>
        </PargraphBox>
      </Left>
      </Border>
      <Right>
        <Box>
          <Small>No Bundles</Small>
          <Small>No Add-Ons</Small>
        </Box>
        <CarouselContainer>
          <CarouselAuto customImages={images}/>
        </CarouselContainer>
      </Right>
    </Parent>
    </>
  );
}