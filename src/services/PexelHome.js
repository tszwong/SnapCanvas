import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// get the api key from our .env file since we don't want to make our key public
// initialize the Pexel client with the key
const ImageGallery = () => {

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

    @media screen and (max-width: 750px) {
      width: 100%;
      max-width: 100%;
    }
  `

  const Container = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top:5vh;
    justify-content: space-between;
  
  `

    const [images, setImages] = useState([]);
  
    useEffect(() => {
      const fetchImages = async () => {
        try {
          const response = await axios.get('https://api.pexels.com/v1/curated', {
            headers: {
              Authorization: process.env.REACT_APP_PEXELS_API_KEY,
            },
            params: {
              per_page: 30,
            },
          });
  
          setImages(response.data.photos);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };
  
      fetchImages();
    }, []);
  
    return (
        <>
      <Container>
        {images.map((image) => (
            <Card>
            <img
                key={image.id}
                src={image.src.large}
                alt={image.photographer}
                style={{ width: '100%', marginBottom: '20px' }}
            />
          </Card>
        ))}
      </Container>
      </>
    );
  };
  
  export { ImageGallery };