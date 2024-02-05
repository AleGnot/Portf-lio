import styled from "styled-components";

export const TecnoContainer = styled.div`
    width: 100px;
    height: 80%;
    background-color: #232428;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;

    @media(max-width: 768px){
        height: 90px;
        width: 80%;
        flex-direction: row;
    }

    @media(max-width: 480px){
        width: 95%;
    }
`;

export const TecnoIcon = styled.div`
    max-height: 85px;
    width: 85px;
    background-color: transparent;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin: 0.5rem 0;

    @media(max-width: 768px){
        width: 76.5px;
        margin: 0 0.5rem;
    }

    @media(max-width: 480px){
        width: 75px;
    }
`;

export const Image = styled.img`
    max-height: 65px;
    border-radius: 5px;
    transition: 0.3s;
    
    &:hover {
        transform: scale(1.2);
    }

    @media(max-width: 480px){
        max-width: 50px;
        max-height: 50px;
    }
`;