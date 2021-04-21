import React from 'react';
import Container from 'react-bootstrap/Container';

function Article(props) {

    return(
        <Container fluid={true}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="media blog-media">
                            <a href="#"><img className="d-flex" src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                             alt="Generic placeholder image" /></a>
                            <div className="circle">
                                <h5 className="day">14</h5>
                                <span className="month">Apr</span>
                            </div>
                            <div className="media-body">
                                <a href="#"><h5 className="mt-0">Coming Soon</h5></a> I’ve code reviewed over 750 pull requests at Amazon. Here’s my exact thought process.
                                <a href="#" className="post-link">Read More</a>
                                <ul>
                                    <li>by: Admin</li>
                                    <li className="text-right"><a href="#">07 comments</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="media blog-media">
                            <a href="#"><img className="d-flex" src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                             alt="Generic placeholder image" /></a>
                            <div className="circle">
                                <h5 className="day">12</h5>
                                <span className="month">Apr</span>
                            </div>
                            <div className="media-body">
                                <a href="#"><h5 className="mt-0">Coming soon</h5></a> Spring Boot JpaRepository Tutorial. Queries in the background so that the database operations are abstracted.
                                <a href="#" className="post-link">Read More</a>
                                <ul>
                                    <li>by: Admin</li>
                                    <li className="text-right"><a href="#">04 comments</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );

}

export default Article;