import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';

export const Home = () => (
    <React.Fragment>
        <Navigation />
        <Video />
        <ReviewSlider data={sliderData}/>
        <MissionStatement />
        <About />
        <Media />
    </React.Fragment>
)

export default Home;
