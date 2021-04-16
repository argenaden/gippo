import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Argen Adenov',
            headerLinks: [
                {title: 'Home', path: '/'},
                {title: 'About', path: '/'},
                {title: 'Contact', path: '/'}
            ],
            about: {
                title: 'About'
            },
            contact: {
                title: 'Reach me out'
            }
        }
    }
    render() {
        return (
            <Router>
                <Container className="border-bottom" fluid={true}>
                    <Navbar className="border-bottom" bg="transparent" expand="lg">
                        <Navbar.Brand>Argen Adenov</Navbar.Brand>

                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav>
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Router>
        );
    }
}

export default App;
