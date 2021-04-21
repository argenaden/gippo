import React from 'react';

import Card from '../components/Card';

import shop from '../assets/images/shop.svg';
import faced from '../assets/images/faced.svg';
import git from '../assets/images/git.svg';
import data from '../assets/images/data.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Shopping Site',
                    subTitle: 'Comming Soon',
                    imgSrc: shop,
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Automatic Story Telling ',
                    subTitle: 'Github',
                    imgSrc: git,
                    link: 'https://www.github.com/argenaden',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Data collection App',
                    subTitle: 'Github',
                    imgSrc: data,
                    link: 'https://github.com/argenadenov/RecordingApp',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Face Detection App',
                    subTitle: 'OpenCV',
                    imgSrc: faced,
                    link: 'https://github.com/argenadenov/FaceDetection',
                    selected: false
                }
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={false}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;