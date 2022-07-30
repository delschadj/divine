import React from 'react';
import HeroSection from '../components/Explore/HeroSection';
import Religions from '../components/Explore/Religions';

import header from "../assets/images/header.jpeg"

const About = () => {
  return (

    <div>
      <HeroSection 
        header={header} 
        h1={"Start exploring the world of other religions."} 
        text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."}/>
      <Religions/>
    </div>

  );
};

export default About;