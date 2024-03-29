import React from 'react';
import Container from 'react-bootstrap/Container';

function PostPage(props) {

    return(
        <Container fluid={true}>
            <div className="input-group">
                <div className="col-md-12 form-outline">
                    <input type="search" id="form1" className="form-control" placeholder="Search"
                           aria-label="Search"/>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-start">

                    <div className="col-md-6">
                        <div className="media blog-media ">
                            <iframe allow="autoplay" width="130%" height="200" className="shadow-lg p-3 mb-2 bg-body rounded mx-auto"
    src="https://www.iheart.com/podcast/105-how-to-money-30166328/episode/debunking-common-tax-misconceptions-344-81212892/?embed=true"
    frameBorder="0"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="media blog-media">
                            <iframe className="shadow-lg p-3 mb-2 bg-body rounded mx-auto" allow="autoplay" width="130%" height="200"
                                    src="https://www.iheart.com/podcast/269-smart-talks-with-ibm-79842497/episode/using-ai-to-rethink-the-way-80142544/?embed=true"
                                    frameBorder="0"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="media blog-media">
                            <iframe className="shadow-lg p-3 mb-2 bg-body rounded mx-auto" allow="autoplay" width="130%" height="200"
    src="https://www.iheart.com/podcast/269-smart-talks-with-ibm-79842497/episode/how-5g-edge-computing-and-ai-80165673/?embed=true"
    frameBorder="0"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="media blog-media">
                            <iframe className="shadow-lg p-3 mb-2 bg-body rounded mx-auto" allow="autoplay" width="130%" height="200"
    src="https://www.iheart.com/podcast/254-song-exploder-27500702/episode/glass-animals-heat-waves-79471561/?embed=true"
    frameBorder="0"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="media blog-media">
                            <iframe className="shadow-lg p-3 mb-2 bg-body rounded mx-auto" allow="autoplay" width="130%" height="200"
    src="https://www.iheart.com/podcast/254-song-exploder-27500702/episode/dua-lipa-levitating-72335613/?embed=true"
    frameBorder="0"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="media blog-media">
                            <iframe className="shadow-lg p-3 mb-2 bg-body rounded mx-auto" allow="autoplay" width="130%" height="200"
    src="https://www.iheart.com/podcast/brainstuff-20922291/episode/what-is-the-worlds-oldest-book-80370733/?embed=true"
    frameBorder="0"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="media blog-media">
                            <iframe className="shadow-lg p-3 mb-2 bg-body rounded mx-auto" allow="autoplay" width="130%" height="200"
    src="https://www.iheart.com/podcast/105-stuff-you-should-know-26940277/episode/how-the-electrical-grid-works-81169249/?embed=true"
    frameBorder="0"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="media blog-media">
                            <iframe className="shadow-lg p-3 mb-2 bg-body rounded mx-auto" allow="autoplay" width="130%" height="200"
    src="https://www.iheart.com/podcast/326-the-daily-28076606/episode/a-shrinking-society-in-japan-82201898/?embed=true"
    frameBorder="0"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="media blog-media">
                            <iframe className="shadow-lg p-3 mb-2 bg-body rounded mx-auto" allow="autoplay" width="130%" height="200"
    src="https://www.iheart.com/podcast/326-the-daily-28076606/episode/why-russia-is-exporting-so-much-81640571/?embed=true"
    frameBorder="0"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="media blog-media">
                            <iframe className="shadow-lg p-3 mb-2 bg-body rounded mx-auto" allow="autoplay" width="130%" height="200"
                                    src="https://www.iheart.com/podcast/272-billionaire-boys-club-69452191/episode/introducing-billionaire-boys-club-69452192/?embed=true"
                                    frameBorder="0"/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );

}

export default PostPage;