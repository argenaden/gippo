import React from 'react';
import Container from 'react-bootstrap/Container';

function PostPage(props) {

    return(
        <Container fluid={true}>
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-md-6">
                        <div className="media blog-media">
                            <iframe allow="autoplay" width="100%" height="200"
    src="https://www.iheart.com/podcast/105-how-to-money-30166328/episode/debunking-common-tax-misconceptions-344-81212892/?embed=true"
    frameBorder="0"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="media blog-media">
                            <iframe allow="autoplay" width="100%" height="200"
                                    src="https://www.iheart.com/podcast/269-smart-talks-with-ibm-79842497/episode/using-ai-to-rethink-the-way-80142544/?embed=true"
                                    frameBorder="0"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="media blog-media">
                            <iframe allow="autoplay" width="100%" height="200"
    src="https://www.iheart.com/podcast/269-smart-talks-with-ibm-79842497/episode/how-5g-edge-computing-and-ai-80165673/?embed=true"
    frameBorder="0"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="media blog-media">
                            <iframe allow="autoplay" width="100%" height="200"
    src="https://www.iheart.com/podcast/254-song-exploder-27500702/episode/glass-animals-heat-waves-79471561/?embed=true"
    frameBorder="0"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="media blog-media">
                            <iframe allow="autoplay" width="100%" height="200"
    src="https://www.iheart.com/podcast/254-song-exploder-27500702/episode/dua-lipa-levitating-72335613/?embed=true"
    frameBorder="0"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="media blog-media">
                            <iframe allow="autoplay" width="100%" height="200"
    src="https://www.iheart.com/podcast/brainstuff-20922291/episode/what-is-the-worlds-oldest-book-80370733/?embed=true"
    frameBorder="0"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="media blog-media">
                            <iframe allow="autoplay" width="100%" height="200"
    src="https://www.iheart.com/podcast/105-stuff-you-should-know-26940277/episode/how-the-electrical-grid-works-81169249/?embed=true"
    frameBorder="0"/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );

}

export default PostPage;