import styled from "styled-components";
import React from "react";
import { Link } from 'react-router-dom';
import {useState} from 'react';


export function Overlay() {
    const [displayText, setDisplayText] = useState('Hover or click a button~~');
  
    const handleHover = (text) => {
      setDisplayText(text);
    };

    const OverlayBox = styled.div `
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding-top: 10vh;
        height:70vh;
        width:100%;
        position: absolute;
        z-index:2;

      @media screen and (max-width: 750px) {
        flex-direction: column;
      }
    `

    const Heading = styled.div `
        display: flex;
        flex-direction: column;
        background-color:black;
        color:white;
        padding: 3vh;
        border:solid 1px white;
        max-width:50%;
        opacity: 80%;

      @media screen and (max-width: 750px) {
        width: 90%;
        max-width: 100%;
      }

    `

    const Signholder = styled.div `
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: black;
        opacity: 80%;
        width:30vw;
        height:50vh;
        padding: 3vh;

      @media screen and (max-width: 750px) {
        margin-top: 2vh;
        width: 90%;
        max-width: 100%;
      }
    `

    const Toggle = styled.div `
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width:80%;
        margin:2vh;
        border-bottom: 1px solid white;
        padding-bottom: 1vh;
    `
    const Textbox = styled.div `
        height:25vh;
        width:22vw;
        background-color:white;
        display:flex;
        text-align: center;
        margin: 1vh;
        padding: 1vh;

        @media screen and (max-width: 750px) {
          width: 100%;
          max-width: 100%;

        }
    `

    const Button = styled.button `
        width: 10vw;
        height:7vh;

        &:hover{
            background-color:gray;
        }

        @media screen and (max-width: 750px) {
          display: block;
          width: 15vw;
        }
    `

    return(
        <>
            <OverlayBox>
                <Heading>
                    <h1>Snap Canvas</h1>
                    <p>Welcome to Snap Canvas, a student made photo gallery. Join us today for free high-resolution images</p>
                </Heading>
                <Signholder>
                    <Toggle>
                      <Link to="/signup">
                          {/* content will change depending on hover status */}
                          <Button
                            onMouseEnter={() => handleHover('Log in to explore a personalized experience tailored just for you.' +
                            ' Unlock exclusive features, save your preferences, and connect with a vibrant community of users.')}
                            onMouseLeave={() => handleHover('Hover or click a button~~')}>
                              Login
                          </Button>
                      </Link>  
                      <Link to="/signup">
                          {/* content will change depending on hover status */}
                          <Button
                            onMouseEnter={() => handleHover('Sign up to join our community and embark on a journey of discovery.' +
                            ' Experience the benefits of membership and connect with like-minded individuals.')}
                            onMouseLeave={() => handleHover('Hover or click a button~~')}>
                              Sign Up
                          </Button>
                      </Link>

                    </Toggle>

                    {/* default display text when not hovered */}
                    <Textbox>{displayText}</Textbox>

                </Signholder>
            </OverlayBox>
        </>
    )
}
