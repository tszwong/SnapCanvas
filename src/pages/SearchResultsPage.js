import React from 'react';

// this page will display the search results from the Pexel API based on the user input
const SearchResultsPage = ({ images }) => {
    return ( // renders a div containing an image
        <div>
            {images.map((image, index) => (
                <img key={index} src={image.src.medium} alt={image.alt} />
            ))}
        </div>
    );
};

export default SearchResultsPage;
