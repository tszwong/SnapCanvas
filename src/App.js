import './App.css';

// React, Material UI, and Bootstrap imports
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    useLocation,
    Route,
    Link,
    Navigate
} from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

// component imports
import SearchBar from './components/SearchBar';
import DarkModeToggle from "./components/DarkModeToggle";
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import HistoryPage from './pages/HistoryPage';
import MembershipPage from './pages/MembershipPage';
import SearchResultsPage from './pages/SearchResultsPage';
import Credits from './pages/Credits';
import SignUpForm from './pages/SignUp';

export const ModeContext = React.createContext(null);

function App() {
    // initializing mode state
    const [mode, setMode] = useState("light");

    // function that changes the state of mode from light to dark or dark to light
    const toggleMode = () => {
        setMode((current) => (current === "light" ? "dark" : "light"));
    }

    return (
        // allows us to access mode and toggleMode
        <ModeContext.Provider value={{ mode, toggleMode }}>

            <div id={mode}>
                <Router basename="/wongt/cs103/projects/final-project">
                    <div>
                        {/* Navigation, using React Bootstrap to make things easier */}
                        <Navbar expand="lg" className="bg-body-tertiary" id={"nav-styles"}>
                            <Container fluid>

                                {/* hamburger nav will be enabled for smaller screens*/}
                                <Navbar.Toggle aria-controls="navbar-nav" />
                                <Navbar.Collapse id="navbar-nav">

                                    {/* home link, potentially replaced with logo later */}
                                    <Nav className="me-auto">
                                        <Nav.Link as={Link} to="/home" id={"site-name-nav"}>Snapcanvas.</Nav.Link>
                                    </Nav>

                                    {/* adding the search bar component*/}
                                    <SearchBar/>

                                    {/* Right-aligned links */}
                                    <Nav style={{ marginRight: "3vw" }}>
                                        <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                                        <Nav.Link as={Link} to="/history">History</Nav.Link>
                                        <Nav.Link as={Link} to="/membership">Membership</Nav.Link>
                                        <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                                    </Nav>

                                    {/* dark mode toggle button placed in the nav bar to make it easier to access */}
                                    <div className={"mode-switch"}>
                                        {/* calling the DarkModeToggle component */}
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<DarkModeToggle sx={{ m: 1 }}  checked={mode === "dark"}  onChange={toggleMode}
                                                /> } label="Theme Switch"
                                            />
                                        </FormGroup>
                                    </div>
                                </Navbar.Collapse>

                            </Container>
                        </Navbar>

                        {/* linking all the route endpoints to the corresponding components */}
                        <Routes>
                            {/* we want the default endpoint to be /home */}
                            <Route element={<Navigate to="/home" />} />

                            <Route path="/about-us" element={<AboutUsPage />} />
                            <Route path="/history" element={<HistoryPage />} />
                            <Route path="/membership" element={<MembershipPage />} />
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/signup" element={<SignUpForm />} />
                            <Route path="/search" element={<SearchResults />} />
                            <Route path="/credits" element={<Credits />} />
                        </Routes>
                    </div>
                </Router>
            </div>
        </ModeContext.Provider>
    );
}

export default App;

// component for rendering the search results
function SearchResults() {
    const location = useLocation();
    const { images } = location.state || { images: [] };  // store the images returned from api call in an array
    return <SearchResultsPage images={images} />;  // render the search results page with the images gathered
}
