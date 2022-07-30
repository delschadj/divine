import React from 'react';
import HeroSection from '../components/Explore/HeroSection';
import header from "../assets/images/header_christianity.jpg"

const Christianity = () => {
  return (

    <div>
        <HeroSection header={header} h1={"Christianity"} text={"Christianity is an Abrahamic monotheistic religion based on the life and teachings of Jesus of Nazareth. It is the world's largest religion, with about 2.8 billion followers, representing one-third of the global population."}/>
        <h1>Christianity</h1>
    </div>
    
  );
};

export default Christianity;