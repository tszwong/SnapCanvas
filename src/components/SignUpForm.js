import React from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

const SignUpForm = () => {
    return (

        // putting the form in a bootstrap container
        <Container className="d-flex justify-content-center align-items-center">
            <Row>
                <Col lg={12} md={12} className="mx-auto">
                    <Card className="mt-5 signup-card">
                        <Card.Body>
                            {/* title of the form */}
                            <Card.Title className="text-center sign-up-title">Sign Up for SnapCanvas</Card.Title>

                            {/* required field 1: email, checks if email is entered */}
                            <Form>
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        required
                                        size="lg"
                                    />
                                </Form.Group>

                                {/* required field 2: password, hidden the password text */}
                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                        size="lg"
                                    />
                                </Form.Group>

                                {/* radio buttons for selecting plans */}
                                <Form.Group className="mb-4">
                                    <Form.Check
                                        type="radio"
                                        label="Premium Plus - $14.99/month"
                                        name="plan"
                                        id="premiumPlan"
                                        value="premium"
                                        defaultChecked
                                        size="lg"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Premium Plan - $9.99/month"
                                        name="plan"
                                        id="premiumPlan"
                                        value="premium"
                                        defaultChecked
                                        size="lg"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Basic Plan - $0.00/month"
                                        name="plan"
                                        id="premiumPlan"
                                        value="premium"
                                        defaultChecked
                                        size="lg"
                                    />
                                </Form.Group>

                                {/* sign up button, does not have any functionality besides clearing the form once clicked */}
                                {/* down the line could implement firebase OAuth2 authentication systems, but just for show currently */}
                                <div className="d-grid">
                                    <Button variant="primary" type="submit" size="lg">
                                        Sign Up
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUpForm;
