import logo from './logo.svg';
import './App.css';

import {
    BrowserRouter as Router,
    Routes,
    useLocation,
    Route, // <-- Add this import
    Link
} from 'react-router-dom';

// react and Bootstrap imports
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, { useState } from "react";

// component imports
import SearchBar from './components/SearchBar';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import HistoryPage from './pages/HistoryPage';
import MembershipPage from './pages/MembershipPage';
import SearchResultsPage from './pages/SearchResultsPage';

function App() {
    return (
        <Router>
            <div>
                {/* Navigation, using React Bootstrap to make things easier */}
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid>

                        {/* will be uncommented and used when we have some sort of logo created */}
                        {/*<Navbar.Brand as={Link} to="/">*/}
                        {/*    <img src={logo} alt="Logo" width="30" height="30" />*/}
                        {/*</Navbar.Brand>*/}

                        {/* hamburger nav will be enabled for smaller screens*/}
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav">

                            {/* home link, potentially replaced with logo later */}
                            <Nav className="me-auto" style={{ marginLeft: "5vw" }}>
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                            </Nav>

                            {/* adding the search bar component*/}
                            <SearchBar/>

                            {/* Right-aligned links */}
                            <Nav style={{ marginRight: "5vw" }}>
                                <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                                <Nav.Link as={Link} to="/history">History</Nav.Link>
                                <Nav.Link as={Link} to="/membership">Membership</Nav.Link>
                                <Nav.Link as={Link} to="/upload">Upload</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>


                {/* Routes */}
                <Routes>
                    <Route path="/about-us" element={<AboutUsPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                    <Route path="/membership" element={<MembershipPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<SearchResults />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

// component for rendering the search results
function SearchResults() {
    const location = useLocation();
    const { images } = location.state || { images: [] };  // store the images returned from api call in an array
    return <SearchResultsPage images={images} />;  // render the search results page with the images gathered
}
