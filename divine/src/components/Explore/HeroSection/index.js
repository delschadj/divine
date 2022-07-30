import React, { useState } from 'react'
import Video from "../../../assets/videos/video.mp4"
import Video2 from "../../../assets/videos/video2.mp4"
import Video3 from "../../../assets/videos/video3.mp4"



import { Button } from '../../ButtonElement'


import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from "./HeroElements"

function HeroSection({header, h1, text}) {

    const [hover, setHover] = useState (false);

    const onHover = () => {
        setHover (!hover);
    }


  return (
    <HeroContainer>
        <HeroBg>
            <ImageBg src={header}/>
        </HeroBg>

        <HeroContent>
            <HeroH1>{h1}</HeroH1>
            <HeroP> {text} </HeroP>
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