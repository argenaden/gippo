import React from 'react';
import Container from 'react-bootstrap/Container';
import article1 from '../assets/images/code.svg';
import article2 from '../assets/images/travel.svg';
import article3 from '../assets/images/coding.svg';

function Article(props) {

    return(
        <Container fluid={true}>
            <div className="container font-weight-light">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow-lg p-3 mb-2 bg-body rounded mx-auto" style={{ width: '18rem' }}>
                            <a href="">
                                <img src={article1}  alt=""/>
                            </a>
                            <div className="card-body">
                                <p className="card-text">Using public APIs allows you to focus on the frontend and things that matter without worrying so much about the database and the backend.
                                    Below are 7 less-talked about public and free APIs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-lg p-3 mb-2 bg-body rounded mx-auto" style={{ width: '18rem' }}>
                            <a href="">
                                <img src={article2}  alt=""/>
                            </a>
                            <div className="card-body">
                                <p className="card-text">I was watching a video from JSFest 2018 where Douglas Crockford gave a presentation on the Power of the Paradigm.
                                    It is an excellent presentation if you have a spare hour to watch..</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-lg p-3 mb-2 bg-body rounded mx-auto" style={{ width: '18rem' }}>
                            <a href="">
                                <img src={article3}  alt=""/>
                            </a>
                            <div className="card-body">
                                <p className="card-text">The shorthand techniques in any programming language help you write code in a much cleaner, optimized, and shorter form.
                                    Now, let’s go through some shorthand techniques one by one..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );

}

export default Article;