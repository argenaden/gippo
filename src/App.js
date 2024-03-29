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
import PostPage from "./pages/post";
import PodcastPage from "./pages/podcast";
import {Helmet} from "react-helmet";



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Argen',
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
            post: {
                title: 'Posts',
                subTitle: 'Coming Soon ...'
            },
            podcast: {
                title: 'Podcast',
            },
        }
    }

    render() {
        return (
            <Router>
                <Helmet>
                    <script src="//code.tidio.co/xcgducxuwkxqlbiolm1ekkcekpksk2l5.js" async/>
                </Helmet>
                <Container className="p-0" fluid={true}>

                    <Navbar className="border-bottom" bg="transparent" expand="lg">
                        <Navbar.Brand className="font-weight-light" style={{color: '#0F4465'}}> Welcome ✨</Navbar.Brand>

                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <Link className="nav-link" to="/gippo">Home</Link>
                                <Link className="nav-link" to="/gippo/podcast">Podcast 🎧</Link>
                                <Link className="nav-link" to="/gippo/about">About</Link>
                                <Link className="nav-link" to="/gippo/post">Post</Link>
                                <Link className="nav-link" to="/gippo/contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                    <Route path="/gippo" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                    <Route path="/gippo/podcast" render={() => <PodcastPage title={this.state.podcast.title} />} />
                    <Route path="/gippo/about" render={() => <ContactPage title={this.state.about.title} />} />
                    <Route path="/gippo/post" render={() => <PostPage title={this.state.post.title} subTitle={this.state.post.subTitle} />} />
                    <Route path="/gippo/contact" render={() => <AboutPage title={this.state.contact.title} />} />

                    <Footer />

                </Container>
            </Router>
        );
    }
}

export default App;
