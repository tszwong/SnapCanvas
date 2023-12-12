import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function PremiumComponent3(){

    const Container = styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 160vh;
        background-color: rgb(221, 221, 221);
        margin-top:3%;
        padding:5vh;
        
        @media screen and (max-width: 750px) {
        flex-direction: column;
        height: 180vh;
      }

    `

    const Boxing = styled.div`
        width: 95vw;
        height: 45vh;
        background-color: rgb(31, 40, 59);
        border-radius: 8px;
        padding: 5%;
        color: white;
        margin-bottom: 5vh;

        @media screen and (max-width: 750px) {
            height: auto;
  }
    
    `
    const WhiteBox = styled(Boxing) `
        background-color:#faf6eb;;
        text-align: center;
        color: black;

        @media screen and (max-width: 750px) {
        flex-direction: column;
        height: 60vh;
      }
    `

    const Li = styled.li `
        margin-bottom: 1vh;
    `
    const H1 = styled.h1 `
        margin-bottom: 5vh;
        text-align: center;
        text-decoration: underline;
    `
    const Button = styled.button `
        margin-top: 2vh;
        height:7vh;
        width: 20vw;

        @media screen and (max-width: 750px) {
            margin-top: 2vh;
            height:10vh;
            width: 25vw;
      }
    `
    
    return(
        <>
            <Container>
                <Boxing>
                    <H1>Why Go Premium?</H1>
                    <ul>
                        <Li>Access to Premium Quality: Dive into our extensive library of high-resolution, premium-quality photos curated for your creative needs.</Li>
                        <Li>Priority Support: Experience top-notch customer support, ensuring a seamless and efficient browsing experience.</Li>
                        <Li>Ad-Free Experience: Enjoy uninterrupted browsing without distractions, allowing you to focus solely on discovering stunning imagery.</Li>
                        <Li>Exclusive Collections: Gain early access to exclusive collections and new releases, staying ahead in your creative endeavors.</Li>
                    </ul>
                </Boxing>
                <WhiteBox>
                <H1>Elevate Your Experience with SnapCanvas Premium</H1>
                <p>Unlock the full potential of SnapCanvas with our premium membership. Elevate your photo browsing experience and enjoy exclusive benefits designed to enhance your creativity.</p>
                <Link to="/signup"><Button>Renew Monthly - Cancel Anytime</Button></Link>
                </WhiteBox>
                <Boxing style={{textAlign:'center'}}>
                    <span class="fa fa-star checked" style={{marginRight: '10px'}}></span>
                    <span class="fa fa-star checked" style={{marginRight: '10px'}}></span>
                    <span class="fa fa-star checked" style={{marginRight: '10px'}}></span>
                    <span class="fa fa-star checked" style={{marginRight: '10px'}}></span>
                    <span class="fa fa-star checked" style={{marginRight: '10px'}}></span>
                    <H1>"Unleash Your Wanderlust with SnapCanvas Premium"</H1>
                    <p>Elevate your photo exploration experience with SnapCanvas Premium. Gain exclusive access to high-resolution photos, unlock hidden gems, and enjoy seamless browsing without limits. Elevate your travel inspiration and fuel your wanderlust with our premium membership.</p>
                </Boxing>
            </Container>
        </>
    )
}