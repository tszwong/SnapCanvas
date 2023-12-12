import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

const SignUpForm = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Row>
                <Col lg={12} md={12} className="mx-auto">
                    <Card className="mt-5 signup-card">
                        <Card.Body>
                            <Card.Title className="text-center sign-up-title">Sign Up for SnapCanvas</Card.Title>
                            <Form>
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        required
                                        size="lg" // Makes the input larger
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                        size="lg" // Makes the input larger
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Check
                                        type="radio"
                                        label="Premium Plus - $14.99/month"
                                        name="plan"
                                        id="premiumPlan"
                                        value="premium"
                                        defaultChecked
                                        size="lg" // Makes the radio button larger
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Premium Plan - $9.99/month"
                                        name="plan"
                                        id="premiumPlan"
                                        value="premium"
                                        defaultChecked
                                        size="lg" // Makes the radio button larger
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Basic Plan - $0.00/month"
                                        name="plan"
                                        id="premiumPlan"
                                        value="premium"
                                        defaultChecked
                                        size="lg" // Makes the radio button larger
                                    />
                                </Form.Group>

                                <div className="d-grid">
                                    <Button variant="primary" type="submit" size="lg"> {/* Makes the button larger */}
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
