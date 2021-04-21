import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <div className="jumbotron font-weight-light shadow-lg p-3 mb-2 bg-body rounded mx-auto">
                    <div style={{padding:'50px'}}>
                        <p>Hi there 👋 </p>
                        <p>My name is Argen. I'm a software engineer based in Seoul, Korea.</p>
                        <p>Currently,with my friends started this project. You can check it out <a href="http://45.9.190.155/" target="_blank" rel="noopener noreferrer">here</a></p>
                        <p>Here are a few technologies I've been working with recently:</p>
                        <ul>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Vue</li>
                        </ul>

                        <p> I am looking forward to hearing from you! </p>
                        <p> Contact me anytime 😎 </p>
                    </div>
                </div>
            </Content>
        </div>
    );

}

export default AboutPage;