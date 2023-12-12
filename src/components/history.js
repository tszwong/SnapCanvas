import styled from "styled-components";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Historyimg from '../assets/history.png';
import { Link } from 'react-router-dom';

export function History(){

    const Learning = styled.section `
        margin-top: 5vh;
        height:50vh;
        background:url(${Historyimg});
        padding:5vh 3vw;
        position:relative;
        color:white;

        &:hover{
            opacity:80%;
        }

        @media screen and (max-width:750px) {
            height:65vh;
        }
    `

    const Learn = styled.button `
        position:absolute;
        top:80%;
        left: 50%;
        transform: translateX(-50%);
        width:9vw;
        height:7vh;
        font-size:1vw;

      @media screen and (max-width: 750px) {
        width: 50%;
        max-width: 100%;
        font-size: calc(6px + 1vh);
      }
    `

    const Textbox = styled.p `
        margin-top: 2vh;
        background-color:white;
        height:20vh;
        width:60vw;
        position:absolute;
        top:25%;
        left: 50%;
        transform: translateX(-50%);
        padding:5vh 3vw;
        box-sizing: border-box;
        color:black;

      @media screen and (max-width: 750px) {
        width: 85%;
        max-width: 100%;
        height: auto;
      }
      
    `

    return(
        <>
            <Learning>
                {/* route the learn more button to our history page */}
                <Link to="/history"><Learn>Learn More</Learn></Link>

                {/* using imported typing animation package */}
                <TypeAnimation
                    sequence={['Get Your Premium Today!', 500, 'Exclusive Content!', 500, 'Unlimited Downloads!', 500]}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
                <Textbox>
                    Founded in 2023 as a humble final project for CS 103, our photo gallery serves to capture life's unique moments,
                    turning them into timeless narratives. Join us in celebrating our specific moments and milesstones that define our team.
                </Textbox>
            </Learning>
        </>
    )
}