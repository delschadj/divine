import React, {useState} from 'react';

import { AskContainer, AskWrapper, AskCardTopics ,AskCardMain, AskCardLeaderboard, AskIcon, AskH2, AskP, 
  AskIconLeaderboard } 
  from '../components/Ask/AskElements';

import { Button } from '../components/ButtonElement';

import question1 from "../assets/images/question1.png"
import question2 from "../assets/images/question2.png"
import question3 from "../assets/images/question3.png"
import leaderboard from "../assets/images/leaderboard.png"

import { useNavigate } from "react-router-dom";

const Services = () => {
  const [hover, setHover] = useState (false);

    const onHover = () => {
        setHover (!hover);
    }


  return (

    <div>
      <AskContainer id="ask">
        <AskWrapper>

            <AskCardTopics>
                <AskH2> Topics </AskH2>
                <AskP> Christianity </AskP>
                <AskP> Islam </AskP>
                <AskP> Judaism </AskP>
            </AskCardTopics>

            <AskCardMain>
                <AskH2 > What do you want to ask? </AskH2>
                <AskP> CATEGORY: </AskP>
                <Button to="/account" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                    Ask 
                </Button>

                <AskIcon src={question1}></AskIcon>
                <AskIcon src={question2}></AskIcon>
                <AskIcon src={question3}></AskIcon>
            </AskCardMain>

            <AskCardLeaderboard>
                <AskIconLeaderboard src={leaderboard}/>
                <AskH2 > Top Contributors </AskH2>
                <AskP> 1. Yeong-Hwan Euadne </AskP>
                <AskP> 2. Atem Kristiina </AskP>
                <AskP> 3. Zevulun Alfredas </AskP>
                <AskP> 4. Gwendoline Rinat </AskP>
                <AskP> 5. José Manuel Ihar </AskP>
                <AskP> 6. Ervin Tatjana </AskP>
                <AskP> 7. Bolortsetseg Maiken </AskP>
                <AskP> 8. Mieszko Gedaliah </AskP>
                <AskP> 9. Geraint Lavanya </AskP>
                <AskP> 10. Sanjit Burkhart </AskP>
            </AskCardLeaderboard>

        </AskWrapper>
    </AskContainer>
    </div>

  );
};

export default Services;
