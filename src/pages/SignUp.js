import React from 'react';
import Footer from '../components/footer';
import SignUpForm from '../components/SignUpForm';
import { Container } from 'react-bootstrap';

const SignUp = () => {
    return ( // renders a div containing images
        <div>
            <Container>
                {/* put the sign up form in a bootstrap container */}
                <SignUpForm/>
            </Container>

            <Footer/>
        </div>
    );
};

export default SignUp;
