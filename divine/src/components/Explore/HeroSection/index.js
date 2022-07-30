import React, { useState } from 'react'
import Video from "../../../assets/videos/video.mp4"
import Video2 from "../../../assets/videos/video2.mp4"

import { Button } from '../../ButtonElement'


import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from "./HeroElements"

function HeroSection() {

    const [hover, setHover] = useState (false);

    const onHover = () => {
        setHover (!hover);
    }


  return (
    <HeroContainer>
        <HeroBg>
            <ImageBg src={Video2}/>
        </HeroBg>

        <HeroContent>
            <HeroH1>Start exploring the world of other religions.</HeroH1>
            <HeroP>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore 
            magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. 
            </HeroP>
            <HeroBtnWrapper>
                <Button to="/account" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary="true"
                dark="true"
                >
                    Button 
                </Button>
            </HeroBtnWrapper>
        </HeroContent>

    </HeroContainer>
  )
}

export default HeroSection