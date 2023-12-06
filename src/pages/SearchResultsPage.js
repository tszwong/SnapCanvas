import React from 'react';
import styled from 'styled-components';

// this page will display the search results from the Pexel API based on the user input
const SearchResultsPage = ({ images }) => {

    const Card = styled.div`
    border: 1px solid black;
    width: 25vw;
    max-width:25vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2vh;
    padding: 6vh 2vh 2vh 2vh;
    font-size:calc(8px + 1vw);
    background-color: #f0f2f5;
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


    &:hover {
      opacity: 70%;
      box-shadow: 10px 5px 5px gray;
    }
  `

  const Container = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top:5vh;

    justify-content: space-around;
  `


    return ( // renders a div containing an image
        <Container>
            {images.map((image, index) => (
                <Card key={index}>

                <img src={image.src.medium} alt={image.alt} />
                </Card>
            ))}
        </Container>
    );
};

export default SearchResultsPage;
