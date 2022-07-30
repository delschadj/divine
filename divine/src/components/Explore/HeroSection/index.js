import React from 'react'
import Video from "../../../assets/videos/video.mp4"
import header from "../../../assets/images/header.jpeg"



import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from "./HeroElements"

function HeroSection() {
  return (
    <HeroContainer>
        <HeroBg>
            <ImageBg autoPlay loop muted src={Video} type="video/mp4"/>
        </HeroBg>

        <HeroContent>
            <HeroH1>Virtual Banking Made Easy</HeroH1>
            <HeroP>
                Sign up for a new account today and recieve 250€
                in credit towards your next payment.
            </HeroP>
            <HeroBtnWrapper>
                
            </HeroBtnWrapper>
        </HeroContent>

    </HeroContainer>
  )
}

export default HeroSection