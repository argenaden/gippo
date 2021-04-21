import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Coffee from "../components/Coffee";

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <div className="jumbotron font-weight-light shadow-lg p-3 mb-2 bg-body rounded mx-auto">
                    <div style={{padding:'50px'}}>
                        <p>Hi there 👋 </p>
                        <p>My name is Argen. I'm a software engineer based in Seoul, Korea.</p>
                        <p>Currently,with my friends working on social project to help high school students to learn better. You can check it out <a href="http://45.9.190./" target="_blank" rel="noopener noreferrer">here</a></p>
                        <p>Here are a few technologies I've been working with recently:</p>
                        <ul>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Vue</li>
                        </ul>
                        <p> Have feedback about the website? Found a mistake? Got an idea of what to add next?
                            Just want to say hi? Feel free to text me in chat bot or via email, I will be happy to hear from you! 😎 </p>

                        <p> Lastly, you can buy me a coffee: </p>
                        <Coffee />
                    </div>
                </div>
            </Content>
        </div>
    );

}

export default AboutPage;