import React, { useState } from 'react'
import {ReligionsContainer, 
    ReligionsWrapper, 
    ReligionsCard, 
    ReligionsIcon, 
    ReligionsH2, 
    ReligionsP} from "./ReligionsElements"

import Icon1 from "../../../assets/images/Icon1.jpg"
import Icon2 from "../../../assets/images/Icon2.jpg"
import Icon3 from "../../../assets/images/Icon3.png"

import { Button } from '../../ButtonElement'
import { useNavigate } from "react-router-dom";

function Religions() {

    const [hover, setHover] = useState (false);

    const onHover = () => {
        setHover (!hover);
    }

    let navigate = useNavigate();

    const routeChangeChristianity = () =>{ 
        let path = `/explore/christianity`; 
        navigate(path);
    }

    const routeChangeIslam = () =>{ 
        let path = `/explore/islam`; 
        navigate(path);
    }

    const routeChangeJudaism = () =>{ 
        let path = `/explore/judaism`; 
        navigate(path);
    }

  return (
    <ReligionsContainer id="religions">
        <ReligionsWrapper>

            <ReligionsCard onClick={routeChangeChristianity}>
                <ReligionsIcon src={Icon1}/>
                <ReligionsH2> Christianity </ReligionsH2>
                <ReligionsP> Christianity is an Abrahamic monotheistic religion based on the life and teachings of Jesus of Nazareth. 
                    It is the world's largest religion, with about 2.8 billion followers, representing one-third of the global population.
                </ReligionsP>
                <Button to="/explore/christianity"  onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                    Button 
                </Button>
            </ReligionsCard>

            <ReligionsCard onClick={routeChangeIslam}>
                <ReligionsIcon src={Icon2}/>
                <ReligionsH2  > Islam </ReligionsH2>
                <ReligionsP> Islam  is an Abrahamic monotheistic religion, centred primarily around the Quran, 
                    a religious text that is considered by Muslims to be the direct word of God (or Allah) as it was revealed to Muhammad, 
                    the main and final Islamic prophet.
                </ReligionsP>
                <Button to="/account" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                    Button 
                </Button>
            </ReligionsCard>

            <ReligionsCard onClick={routeChangeJudaism}>
                <ReligionsIcon src={Icon3}/>
                <ReligionsH2 > Judaism </ReligionsH2>
                <ReligionsP> Judaism is an Abrahamic, monotheistic religion comprising the collective religious, 
                    cultural, and legal tradition and civilization of the Jewish people.
                    It has its roots as an organized religion in the Middle East during the Bronze Age.
                </ReligionsP>
                <Button to="/account" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                    Button 
                </Button>
            </ReligionsCard>

        </ReligionsWrapper>
    </ReligionsContainer>
  )
}

export default Religions