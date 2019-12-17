import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import logo from '../assets/rick-and-morty-logo.png'

export default function Home() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div className="home-container">
            <h1>Welcome to...</h1>
            <img src={logo}></img>
            <AutoplaySlider
                cssModule={AwsSliderStyles}
                play={true}
                cancelOnInteraction={false}
                interval={5000}>
                <div data-src="" />
                <div data-src="" />
                <div data-src="" />
        </AutoplaySlider>
        </div>
    );
}
