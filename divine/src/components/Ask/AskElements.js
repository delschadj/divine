import styled from "styled-components"

export const AskContainer = styled.div`
    height: 1920px;
    display: flex;
    flex-direction: column;
    vertical-align: top;
    align-items: center;
    background: #f1f1f1;

    @media screen and (max-width: 768px) {
        height: 2100px;
    }

    @media screen and (max-width: 480px) {
        height: 2600px;
    }
`

export const AskWrapper = styled.div`
    
    max-width: 1620px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: top;
    grid-gap: 16px;
    padding: 50px 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const AskCardTopics = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba (0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale (1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const AskCardMain = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 1640px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba (0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale (1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const AskCardLeaderboard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 700px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba (0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale (1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const AskIcon = styled.img`
height: 460px;
width: 460px;
margin-bottom: 10px;

@media screen and (max-width: 768px) {
    height: 360px;
    width: 360px;
}

@media screen and (max-width: 480px) {
    height: 260px;
    width: 260px;
}
`

export const AskIconLeaderboard = styled.img`
height: 60px;
width: 60px;
margin-bottom: 10px;

@media screen and (max-width: 768px) {
    height: 60px;
    width: 60px;
}

@media screen and (max-width: 480px) {
    height: 60px;
    width: 60px;
}
`

export const AskH2 = styled.h2`
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 10px;
`

export const AskP = styled.p`
    font-size: 1rem;
    text-aling: center;
    margin-bottom: 20px;
`;