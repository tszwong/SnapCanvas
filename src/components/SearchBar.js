import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import searchImages from "../services/PexelService";

const SearchBar = () => {
    const [query, setQuery] = useState('');  // state to track user's search query
    const navigate = useNavigate(); // hook used to navigate to different routes

    // updates the state of the query whenever the user gives an input to the search bar
    const handleSearchChange = (event) => {
        setQuery(event.target.value);
    };

    // calls the PexelService with user input
    const handleSearch = (event) => {
        event.preventDefault();
        searchImages(query).then(results => {
            navigate('/search', { state: { images: results } });  // redirect to page displaying search results
        }).catch(error => { // error handling
            console.error("Error fetching images:", error);  // if the input resulted in no images found
        });
    };

    return (

        // rendering the search bar
        <div className="d-flex flex-grow-1" id={"search-bar"}>

            {/* using form from bootstrap */}
            <Form className="d-flex w-100" onSubmit={handleSearch}>
                <FormControl
                    type="search"
                    placeholder="Search..."
                    className="me-2"
                    aria-label="Search"
                    value={query}
                    onChange={handleSearchChange}
                />

                {/* search button */}
                <Button variant="dark" type="submit" id={"search-btn"}>
                    {/* logo free from bootstrap */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
                    </svg>
                </Button>
            </Form>
        </div>
    );
};

export default SearchBar;
