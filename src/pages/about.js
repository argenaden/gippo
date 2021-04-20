import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hi there 👋 , my name is Argen. I'm a software engineer in Seoul, Korea.</p>

                <p>Me and my friends are working on this project. You can check it out <a href="http://45.9.190.155/" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage.</p>
            </Content>
        </div>
    );

}

export default AboutPage;