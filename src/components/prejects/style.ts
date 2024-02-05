import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 91%;
    display: flex;
    align-items: center;
    background-color: #232428;
    border-top-left-radius: 0px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    a {
        text-decoration: none;
        max-height: 67%;
    }

    @media(max-width: 480px){
        height: 70vh;
        justify-content: center;
    }
`;

export const CardContainer = styled.div`
    height: 100%;
    max-width: 90%;
    background-color: #384287;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 35px;
    border-radius: 5px;

    @media(max-width: 480px){
        height: 100%;
    }
`;

export const Card = styled.div`
    height: 98%;
    width: 95%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    @media(max-width: 480px){
        height: 100%;
        width: 100%;
    }
`;

export const CardImg = styled.img`
    max-height: 65%;
    border-radius: 5px;
    transition: 0.8s;

    &:hover {
        transform: scale(1.05);
    }

    @media(max-width: 480px){
        max-width: 90%;
    }
`;

export const CardTitle = styled.span`
    font-size: 1.35rem;
    font-weight: bold;
    padding: 0.2rem 0.5rem;
    color: #f8fafc;
    transition: 0.8s;
    border-radius: 5px;
    
    &:hover {
        background-color: #000000c5;
    }

    @media(max-width: 480px){
        font-size: 1.55rem;
    }
`;

export const CardDescr = styled.span`
    width: 100%;
    font-size: 0.8rem;
    overflow: none;
    word-wrap: normal;
    color: #f8fafc;
    text-align: justify;
    padding: 0 1rem;

    @media(max-width: 480px){
        font-size: 0.85rem;
        padding: 0;
    }
`;