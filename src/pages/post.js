import React from 'react';
import Hero from '../components/Hero';
import Article from "../components/Article";

function PostPage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle}/>
            <Article />
        </div>
    );

}

export default PostPage;