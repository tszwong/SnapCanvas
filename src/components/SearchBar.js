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
        }).catch(error => {
            console.error("Error fetching images:", error);  // if the input resulted in no images found
        });
    };

    return (

        // rendering the search bar
        <div className="d-flex flex-grow-1">
            <Form className="d-flex w-100" onSubmit={handleSearch}>
                <FormControl
                    type="search"
                    placeholder="Search..."
                    className="me-2"
                    aria-label="Search"
                    value={query}
                    onChange={handleSearchChange}
                />
                <Button variant="outline-primary" type="submit">Search</Button>
            </Form>
        </div>
    );
};

export default SearchBar;
