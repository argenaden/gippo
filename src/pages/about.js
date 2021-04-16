import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is Argen. I'm a software engineer at eMoldino.</p>

                <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

                <p>I'm constantly learning new things. currently those things include gaining more experience with Vue.js, React, Java - Spring, AWS console</p>

                <p>Me and my friends are working on this project. You can check it out <a href="http://45.9.190.155/" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with Java-Spring, MySQL, React.</p>
            </Content>
        </div>
    );

}

export default AboutPage;