import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Podcast from "../components/Podcast";

function PodcastPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <div className="font-weight-light">
                    <Podcast />
                </div>
            </Content>
        </div>
    );

}

export default PodcastPage;