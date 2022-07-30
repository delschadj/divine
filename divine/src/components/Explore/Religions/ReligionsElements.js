import styled from "styled-components"

export const ReligionsContainer = styled.div`
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px) {
        height: 2100px;
    }

    @media screen and (max-width: 480px) {
        height: 2600px;
    }
`

export const ReligionsWrapper = styled.div`
    
    max-width: 1620px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ReligionsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 1340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba (0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale (1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ReligionsIcon = styled.img`
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

export const ReligionsH2 = styled.h2`
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 10px;
`

export const ReligionsP = styled.p`
    font-size: 1rem;
    text-aling: center;
    margin-bottom: 20px;
`;