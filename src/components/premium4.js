import React from 'react';
import styled from 'styled-components';


export function PremiumComponent4(){

    const Container = styled.div `
        border-top: 1px solid;
        border-bottom: 1px solid;
        height:120vh;
        display:flex;
        flex-direction: column;

        @media screen and (max-width: 750px) {
            height:auto;
            align-items: center;
      }
    `

    const Head = styled.h1 `
        border: 10px double #000;
        border-left: none;
        border-top:none;
        width: 40vw;
        margin-left: 2.5vw;
        margin-top: 3vw;
        padding-bottom: 3vh;
        text-align: center;
      
      @media screen and (max-width: 750px) {
        border: none;
        border-bottom: 10px double #000;
        width: 80vw;
        margin-top:4vh;
      }
    `

    const PlanCard = styled.div `
        display: flex;
        flex-direction: column;
        height: 85vh;
        border: 1px solid #000;
        width: 27vw;
        text-align: center;
        padding: 2.5vh 2vw;
        background-color: #faf6eb;

        &:hover {
          opacity: 70%;
          box-shadow: 10px 5px 5px gray;
        }
        
        @media screen and (max-width: 750px) {
            height:auto;
            width:80vw;
            padding:4vh;
            margin-bottom: 5vh;
      }
    `
    const PlanBox = styled.div `
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top:5vh;

        @media screen and (max-width: 750px) {
            flex-direction: column;
        }
    `

    const H2 = styled.h2 `
        text-decoration:underline;
        margin-bottom:2vh;
        border-bottom:solid 1px black;
        padding-bottom:2vh;
        margin-bottom:4vh;
    `
    const Ul = styled.ul `
        margin:0;
        margin-top:5vh;
        padding:0;
        line-height: 2;
    `

    return(
        <>
            <Container>
                <Head>Choose Your Plan</Head>
                <PlanBox>
                    <PlanCard>
                        <H2>Basic Plan</H2>
                        <h5>$0.00 /month</h5>
                        <Ul>
                            <li>Access: Limited access to a curated collection of standard resolution photos.</li>
                            <li>Monthly Limit: Users can download up to 20 photos per month.</li>
                            <li>Features: Basic browsing experience with access to a selected set of images.</li>
                            <li>Support: Standard customer support available.</li>
                        </Ul>
                    </PlanCard>
                    <PlanCard style={{ backgroundColor: 'rgb(31, 40, 59)', color: 'white' }}>
                        <H2>Premium Plan</H2>
                        <h5>$9.99 /month</h5>
                        <Ul>
                            <li>Access: Complete access to our vast high-resolution photo library.</li>
                            <li>Monthly Limit: Unrestricted downloads, allowing limitless photo downloads.</li>
                            <li>Features: Ad-free browsing ensures uninterrupted exploration. Premium customer support offers comprehensive assistance. Access exclusive collections and early releases.</li>
                            <li>Ideal For: Users seeking high-quality images for personal or commercial use.</li>
                        </Ul>
                    </PlanCard>
                    <PlanCard>
                        <H2>Premium Plus Plan</H2>
                        <h5>$14.99 /month</h5>
                        <Ul>
                            <li>Access: All features of the Premium plan, with added benefits.</li>
                            <li>Monthly Limit: Unlimited downloads with an increased monthly download limit.</li>
                            <li>Additional Features: Early access to the newest releases and exclusive content. Priority customer support for swift assistance and queries. Increased monthly download limit for extensive creative projects.</li>
                            <li>Ideal For: Professional users needing expanded access and exclusive features.</li>
                        </Ul>
                    </PlanCard>
                </PlanBox>
            </Container>    
        </>
    )
}