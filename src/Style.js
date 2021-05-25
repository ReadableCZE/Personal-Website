import styled from "styled-components";

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("/background.png");
`;

export const Main = styled.div`
    width: 100%;
`;

export const Centered = styled.div`
    height: 100vh;
    width: 100%;
    grid-area: main;
    display: grid;
    place-items: center;
`;

export const Container = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    margin-bottom: 2.5em;
    margin-top: 1.5em;
    max-width: 1100px;
    padding: 0 2em;
    width: 100%;
`;


export const BlurredBox = styled.div`
    background-color: rgba(15, 15, 15, 0.6);
    padding: 5px 10px 5px 10px;
    border-radius: 20px;
    z-index: 1;
    backdrop-filter: blur(10px);
`;
const Row = styled.div`display: flex;`;

export const MainRow = styled(Row)`
    place-items: center;

    img {
        border-radius: 50%; 
        height: 60px; 
        width: 60px;
        margin: 10px;
        margin-bottom: 15px;
    }

    @media(max-width: 550px) {
        display: inline;
        text-align: center;   
        justify-content: center;
        img {margin: 0 auto 0 auto;}
    }

    @media (max-width: 400px) {
        h1 {
          font-size: 12vmin;
        }
      
        .ab {
          font-size: 13vmin;
        }
    }
`;

export const IconsRow = styled(Row)`
    color: #99aab5; 
    font-size: 25px; 
    justify-content: center;
    svg {
        margin: 5px;
        cursor: pointer;
      }

    svg:hover {
        color:white;
        transition: color 1s;
    }

`;

export const Title = styled.h1`  
    color: whitesmoke;
    font-size: 50px;
    text-align: top; 
    margin: 0;
`;

export const Boxes = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-column-gap: 50px;
    grid-row-gap: 25px;
`;

export const Unblurred = styled.div`
    z-index: 5;
`;

export const SecondBox = styled.div`
    height: auto;
    width: 90%;
    margin: 0 auto;
    position: relative;
    margin-bottom: 35px;
    box-shadow: 0 0 0 3px rgba(15, 15, 15, 0.2), 0 0 0 6px rgba(15, 15, 15, 0.1), 0 0 0 9px rgba(15, 15, 15, 0.05);
    border-radius: 20px;
`;

export const ContentBox = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: auto auto auto auto;

    @media(max-width: 1500px) {
        grid-template-columns: auto auto auto;
    }
    @media(max-width: 780px) {
        grid-template-columns: auto auto;
    }
    @media(max-width: 520px) {
        grid-template-columns: auto;
    }
    div {    
        background-color: rgba(0, 0, 0, 0.2);   
        color: #c7c7c7;
        margin: 10px;
        display: flex;
        justify-content: center;
    }

`;

export const SBTitle = styled.h3`
    color: #f1f1f1;
    font-size: 28px;
    margin-bottom: 5px;

    @media(max-width: 950px) {
        font-size: 25px;
    }
    @media(max-width: 500px) {
        font-size: 5vw;
    }

`;

export const Center = styled.div`
    text-align: center;   
    justify-content: center;
`;
export const NPMpackages = styled(ContentBox)`
    div {   
        border-radius: 20px;
        font-weight: 400;
        min-width: 150px;
        height: 50px;
        font-size: 15px
    }
`;

export const Languages = styled(ContentBox)`
    div {
        border-radius: 20px;
        font-weight: 600;
        width: 180px;
        height: 50px;
    }
    @media(max-width: 450px) {
        .txt {
            font-size: 4vw;
        }
    }
`;

export const Line = styled.div`
    border: gray solid 1px;
    border-radius: 50%;
    height: 0;
    width: auto;
    margin: 7px 5vw 7px 5vw;
`;

export const Desc = styled.p`
    margin: 10px 10vw 10px 10vw;
    color: #dddddd;
`;
/*
    div {
        background-color: rgba(255, 255, 255, 0.8);
        padding: 10px;
        font-size: 30px;
        text-align: center;
    }
*/