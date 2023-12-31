import React from 'react';
import styled from 'styled-components';
import image1 from '../assets/pre1.jpg';
import image2 from '../assets/pre2.jpg';
import image3 from '../assets/pre3.jpg';
import image4 from '../assets/pre4.jpg';
import image5 from '../assets/pre5.jpg';
import { Link } from 'react-router-dom';


export function PremiumComponent2() {

  const Parent = styled.div`
  position: relative;
  height: 160vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.7);

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    justify-content: space-evenly;
  }

`;

const Left = styled.div`
  position: relative;
  top:-5vh;
  width: 36vw;
  height: 28vw;
  text-align: center;
  border:3px solid black;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.7);

  @media screen and (max-width: 750px) {
    width: 81%;
    height: 50vh;
    padding-bottom: 5vh;
    top: 8vh;
  }
`;

const Right = styled.div`
    position: relative;
    top:8vh;
    left:2vw;
    height: 28vw;
    width: 50vw;
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 750px) {
    flex-direction: column;
    top: 0;
    left: 0;
    height: 210vh;
    width: 100%;
    align-items: center;
    margin-bottom: 5vh;
  }
    
`

const Heading = styled.h1 `

    padding: 4vh 2vw;
    display: flex;
    align-items: center;
    border:1px solid black;
    background-color:black;
    opacity: 80%;
    color:white;
    margin-bottom:5vh;
    
`

const ImageCard = styled.img `
    height: 30vw;
    width: 18vw;
    border:3px solid black;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.7);

    @media screen and (max-width: 750px) {
    height: 90%;
    width: 81%;
  }
`
const PositionedImg = styled(ImageCard) `

    position:relative;
    top:8vh;
    left:2vw;

    @media screen and (max-width: 750px) {
    left: 0;
    top: 0;
    height: 90%;
    width: 81%;
  }
`

const PositionedImg2 = styled(ImageCard) `

    position:absolute;
    top:60vh;
    left:10vw;

    @media screen and (max-width: 750px) {
    position: relative;
    top: 13vh;
    left: 0;
    height: 90%;
    width: 81%;
  }
`

const PositionedImg3 = styled(ImageCard) `

    position:absolute;
    top:94vh;
    left:72vw;

    @media screen and (max-width: 750px) {
    position: relative;
    top: 0;
    left: 0;
    height: 90%;
    width: 81%;
  }
    
`

const ImageCard1 = styled.img `
    height: 30vw;
    width: 30vw;
    position:absolute;
    top:77vh;
    left:50%;
    transform:translateX(-50%);
    border:3px solid black;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.7);

    @media screen and (max-width: 750px) {
    position: relative;
    top: 0;
    left: 0;
    transform:translateX(0%);
    height: 90%;
    width: 81%;
  }
`


return (
    <>
        <Parent>
            <Left>
                <Heading>Most Popular Choice:</Heading>
                <h1>Premium Plan</h1>
                <p style={{ color: 'black' }}>
                    <strong>Only $9.99</strong> /month
                </p>
                <Link to="/signup"><button >Sign Up Now</button></Link>
            </Left>
            <PositionedImg2 src={image3}></PositionedImg2>
            <ImageCard1 src = {image4}></ImageCard1>
            <PositionedImg3 src={image5}></PositionedImg3>
            <Right>
                <ImageCard src={image1}></ImageCard>
                <PositionedImg src={image2}></PositionedImg>
            </Right>
        </Parent>
    </>
)

}