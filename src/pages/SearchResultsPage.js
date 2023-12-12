import React from 'react';
import Footer from '../components/footer';
import { Container} from 'react-bootstrap';
import styled from 'styled-components';

// this page will display the search results from the Pexel API based on the user input
const SearchResultsPage = ({ images }) => {

    const Card = styled.div `
      border: 1px solid black;
      width: 25vw;
      max-width: 25vw;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 3vh;
      padding: 2vh 2vh 5vh 2vh;
      font-size: calc(8px + 1vw);
      border-radius: 2px;
      background-color: #f3f3f3;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &:hover {
        opacity: 80%;
        box-shadow: 7px 3px 3px black;
        transition: 0.3s;
      }

      @media screen and (max-width: 750px) {
        width: 100%;
        max-width: 100%;
      }
    `

  const Container = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top:1vh;
    justify-content: space-around;
    `

    return ( // renders a div containing images
        <div>
            <div id={"search-page-header"}>
                <h2 id={"page-title"}>Search Results...</h2>
                {/* credit statement as required by Pexels */}
                <p>(Photos provided by <a href={"https://www.pexels.com/"}>Pexels</a>)</p>
            </div>
            <Container>
                {/* map the images */}
                {images.map((image, index) => (
                    <Card className={"search-res-photo"} key={index}>
                        {/* get medium sized images only */}
                        <img src={image.src.medium} alt={image.alt} />
                    </Card>
                ))}
            </Container>

            <Footer/>
        </div>
    );
};

export default SearchResultsPage;
