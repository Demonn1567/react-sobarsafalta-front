import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {
                email,
                password,
            });
            console.log(response.data);
            localStorage.setItem('token', response?.data?.access);
            
        } catch (error) {
            console.error("There was an error logging in", error);
        }
    };

    return (
        <Container
            className="d-flex justify-content-center align-items-center vh-100"
            style={{ background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)' }}
        >
            <Card style={{ width: '30rem', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <Card.Body>
                    <Card.Title className="text-center mb-4">Login</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail" className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mt-3">
                            Login
                        </Button>
                    </Form>
                    <div className="text-center mt-3">
                        <Form.Text className="text-muted">
                            Don't have an account yet? <Link to="/registeraccount">Register</Link>
                        </Form.Text>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;
