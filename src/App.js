import logo from './logo.svg';
import './App.css';

import {
    BrowserRouter as Router,
    Routes,
    Route, // <-- Add this import
    Link
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import HistoryPage from './pages/HistoryPage';
import MembershipPage from './pages/MembershipPage';

function App() {
    return (
        <Router>
            <div>
                {/* Navigation, using React Bootstrap to make things easier */}
                {/* when screen is a certain size it will turn into hamburger nav */}
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid>
                        {/* will be used when we have some sort of logo created */}
                        {/*<Navbar.Brand as={Link} to="/">*/}
                        {/*    <img src={logo} alt="Logo" width="30" height="30" />*/}
                        {/*</Navbar.Brand>*/}

                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav">

                            {/* home link, potentially replaced with logo later */}
                            <Nav className="me-auto" style={{ marginLeft: "5vw" }}>
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                            </Nav>

                            {/* search bar + button */}
                            <div className="d-flex flex-grow-1">
                                <Form className="d-flex w-100">
                                    <FormControl
                                        type="search"
                                        placeholder="Search..."
                                        className="me-2"
                                        aria-label="Search"
                                        style={{ marginLeft: "5vw", maxWidth: "50%" }}  // Adjust this percentage as needed
                                    />
                                    <Button variant="outline-primary">Search</Button>
                                </Form>
                            </div>

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
                    <Route path="/about-us" element={<AboutUsPage />} /> {/* <-- Corrected path and used element prop */}
                    <Route path="/history" element={<HistoryPage />} /> {/* <-- Corrected path and used element prop */}
                    <Route path="/membership" element={<MembershipPage />} /> {/* <-- Corrected path and used element prop */}
                    <Route path="/" element={<HomePage />} /> {/* <-- Corrected path and used element prop */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
