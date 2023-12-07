import React from 'react';
import Footer from '../components/footer';
import SignUpForm from '../components/SignUpForm';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

// this page will display the search results from the Pexel API based on the user input
const SignUp = () => {
    return ( // renders a div containing images
        <div>
            <Container>
                <SignUpForm/>
            </Container>
            <Footer/>
        </div>
    );
};

export default SignUp;
