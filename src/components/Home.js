import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import logo from '../assets/rick-and-morty-logo.png'

export default function Home() {
  return (
    <div className="home-container">
        <h1>Welcome to...</h1>
        <img src={logo}></img>
        <AwesomeSlider cssModule={AwsSliderStyles}>
            <div data-src=""/>
            <div data-src=""/>
            <div data-src=""/>
        </AwesomeSlider>
    </div>
  );
}
