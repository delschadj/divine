import React from 'react';
import HeroSection from '../components/Explore/HeroSection';
import header from "../assets/images/header_judaism.jpg"

const Judaism = () => {
  return (

    <div>
        <HeroSection header={header} h1={"Judaism"} text={"Judaism is an Abrahamic, monotheistic, and ethnic religion comprising the collective religious, cultural, and legal tradition and civilization of the Jewish people. It has its roots as an organized religion in the Middle East during the Bronze Age."}/>
        <h1>Judaism</h1>
    </div>

  );
};

export default Judaism;