import React, { Component } from 'react';
import './Work.css';
import image1 from './images/cbc.jpg';
import image2 from './images/686limited.jpg';
import image3 from './images/bioniq.jpg';
import image4 from './images/cryptoyogi1.jpg';
import image5 from './images/knipnu.jpg';
import image6 from './images/ferrocloud.jpg';
import image7 from './images/vineyard.jpg';
import image8 from './images/bioniq2.jpg';
import image9 from './images/cryptoyogi2.jpg';
import image10 from './images/localscoop.jpg';
import image11 from './images/pace.jpg';
import image12 from './images/pq.jpg';
import image13 from './images/ranch.jpg';
import image14 from './images/reallife.jpg';
import image15 from './images/bioniq3.jpg';
import image16 from './images/shipponow.jpg';
import image17 from './images/thefinalproject.jpg';
import image18 from './images/twigg.jpg';
import image19 from './images/incentivegames.jpg';

class Work extends Component {
    render() {
        return (
            <div><h1>Work</h1>
                <hr width="50%"></hr>
                <h3>Case Studies</h3>
                <div className='flexo'>
                    <a href='https://drive.google.com/file/d/0B1SpBSUpxuz4Q2hiY0ZFUllzcXVDOTZITnR5a3NWSUprQjJF/view?usp=sharing' target='_blank'>
                        <Card2><h3>UES</h3>
                            Unified Emergency Service for India.</Card2></a>
                    <a><Card2><h3>User Research</h3></Card2></a>
                    <a><Card2><h3>Persona</h3></Card2></a>
                </div>
                <hr width="50%"></hr>
                <h3>Web Design & Development</h3>
                <div className='flexo'>
                    <a><Card3></Card3></a></div>
                <hr width="50%"></hr>
                <h3>Logo Design</h3>
                <div className='flexo'>
                    <Card1 source={image1}></Card1>
                    <Card1 source={image2}></Card1>
                    <Card1 source={image3}></Card1>
                    <Card1 source={image4}></Card1>
                    <Card1 source={image5}></Card1>
                    <Card1 source={image6}></Card1>
                    <Card1 source={image7}></Card1>
                    <Card1 source={image8}></Card1>
                    <Card1 source={image9}></Card1>
                    <Card1 source={image10}></Card1>
                    <Card1 source={image11}></Card1>
                    <Card1 source={image12}></Card1>
                    <Card1 source={image13}></Card1>
                    <Card1 source={image14}></Card1>
                    <Card1 source={image15}></Card1>
                    <Card1 source={image16}></Card1>
                    <Card1 source={image17}></Card1>
                    <Card1 source={image18}></Card1>
                    <Card1 source={image19}></Card1>

                </div>
            </div>

        );
    }
}

const Card1 = (props) => {
    return (
        <div ><img src={props.source} id='card1'></img></div>
    );
}
const Card2 = (props) => {
    return (
        <div id='card2'>{props.children}</div>
    );
}
const Card3 = (props) => {
    return (
        <div id='card3'>{props.children}</div>
    );
}
export default Work;