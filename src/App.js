import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Footer from "./components/Footer";
import HomePage from "./pages/home";
import AboutPage from "./pages/contact";
import ContactPage from "./pages/about";



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Argen Adenov',
            headerLinks: [
                {title: 'Home', path: '/'},
                {title: 'About', path: '/about'},
                {title: 'Contact', path: '/contact'}
            ],
            home: {
                title: 'Learning Everyday',
                subTitle: 'Welcomes all sort of challenges',
                text: 'Checkout my projects below'
            },
            contact: {
                title: 'Contact me'
            },
            about: {
                title: 'About me'
            },
        }
    }
    render() {
        return (
            <Router>
                <Container className="p-0" fluid={true}>

                    <Navbar className="border-bottom" bg="transparent" expand="lg">
                        <Navbar.Brand>Portfolio</Navbar.Brand>

                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                    <Route path="/about" render={() => <ContactPage title={this.state.about.title} />} />
                    <Route path="/contact" render={() => <AboutPage title={this.state.contact.title} />} />

                    <Footer />

                </Container>
            </Router>
        );
    }
}

export default App;
