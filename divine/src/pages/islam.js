import React from 'react';
import HeroSection from '../components/Explore/HeroSection';
import header from "../assets/images/header_islam.jpg"

const Islam = () => {
  return (

    <div>
        <HeroSection header={header} h1={"Islam"} text={"An Abrahamic monotheistic religion, centred primarily around the Quran, a religious text that is considered by Muslims to be the direct word of God (or Allah) as it was revealed to Muhammad, the main and final Islamic prophet."}/>
        <h1>Islam</h1>
    </div>

  );
};

export default Islam;