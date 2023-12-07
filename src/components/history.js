import styled from "styled-components";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Historyimg from '../assets/history.png';

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
      }
      
    `

    return(
        <>
            <Learning>
                <Learn>Learn More</Learn>
                <TypeAnimation
                    sequence={['Get Your Premium Today!', 500, 'Exclusive Content!', 500, 'Unlimited Downloads!', 500]}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
                <Textbox>
                    dcghjdksfnzknkdsj,vnj jksdnfjkdnjk,ffnvj d.knvkfd,jn.sdnkjndsnfdkfnfdjfndf dfhdhkjfhkfndkfjndifjisdkfnkjnfkdsjfisdlfnkjd
                </Textbox>
            </Learning>
        </>
    )
}