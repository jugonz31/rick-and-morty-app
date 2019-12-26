import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwsSliderStyles from "react-awesome-slider/src/styles";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import logo from "../assets/rick-and-morty-logo.png";
import wallpaper1 from "../assets/wallpaper1.jpg";
import wallpaper2 from "../assets/wallpaper2.jpg";
import wallpaper3 from "../assets/wallpaper3.jpg";

export default function Home() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className="home-container">
      <img src={logo} alt="logo"></img>
      <AutoplaySlider
        cssModule={AwsSliderStyles}
        play={true}
        cancelOnInteraction={false}
        interval={5000}
      >
        <div data-src={wallpaper1} />
        <div data-src={wallpaper2} />
        <div data-src={wallpaper3} />
      </AutoplaySlider>
    </div>
  );
}
