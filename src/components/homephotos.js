import React, {useEffect, useState} from 'react';
import styled from 'styled-components';




export function HomePhotos() {

    const DisplayImg = styled.img`
      width: 90%;
      height: auto;
      object-fit: cover;
    `

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
      
      &:hover {
        opacity: 70%;
        box-shadow: 10px 5px 5px gray;
      }
    `

    const Container = styled.div `
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top:2vh;
      border:1px solid black;
      justify-content: space-between;
    
    
    `

    const[data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try{
                const rawData = await fetch("https://dog.ceo/api/breeds/list/all");
                const actualData = await rawData.json();

                if (actualData.status === 'success') {
                    const breeds = Object.keys(actualData.message);

                    const getImage = breeds.map(async (breed) => {
                        const rawImage = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
                        const actualImage = await rawImage.json();

                        if (actualImage.status === 'success') {
                            return {
                                breed,
                                imageUrl: actualImage.message,
                            };
                        } else {
                            console.log('failed');
                            return null
                        }
                    });
                    const imageData = await Promise.all(getImage);

                    const validImageData = imageData.filter((imageData) => imageData !== null).slice(0,10);
                    //filter out null data if failed
                    setData(validImageData);
                    console.log('yay');
                } else {
                    console.log('nay');
                }

            } catch (error){
                console.error("an error occurred");
            }}

        fetchData()
            .then ((r) => console.log('yay'))

    }, []);




    return(
        <> 
            <Container>
            {data.map(({imageUrl, breed}, index) =>

                           (
                               <Card key = {index} className="photo">
                                    <DisplayImg
                                        src = {imageUrl}
                                        alt = {`Cute doggy at your service. My breed is ${breed}`}
                                        onLoad ={() => {
                                            console.log('good image')
                                        }}
                                        onError={(e) => {
                                            e.target.src = '../assets/Puppy.jpg'; // Use an absolute path
                                            e.target.alt = 'puppy';
                                        }}
                                    />
                                   <h3 id={`dog${index}`}>{breed}</h3>
                                </Card>

                                ))
            }
            </Container>
        </>
    )
}