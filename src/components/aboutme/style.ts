import styled from "styled-components";

export const Container = styled.div`
    height: 80%;
    width: 73%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media(max-width: 768px){
        width: 100%;
        height: 82%;
    }

    @media(max-width: 480px){
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

export const TextPart = styled.div`
    max-width: 70%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    margin-right: 10px;

    @media(max-width: 768px){
        margin-right: 5px;
        align-items: center;
        padding: 3px;
    }

    @media(max-width: 480px){
        max-width: none;
        margin-right: 0;
    }
`;

export const Title = styled.span`
    font-size: 2rem;
    font-weight: bold;
    margin: 0.2rem 0.5rem;
    color: #232428;

    @media(max-width: 480px){
        font-size: 2.5rem;
    }
`;

export const AboutContaine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: #000000c5;
    padding: 0.3rem;
    border-radius: 5px;
    margin: 0 0.5rem;

    @media(max-width: 768px){
        margin: none;
        padding: 0.15rem;
    }
`;

export const AboutText = styled.span`
    width: 95%;
    font-size: 17px;
    text-align: justify;
    color: #f8fafc;
    opacity: 100%;
    padding: 0.5rem 0.8rem ;

    @media(max-width: 480px){
        font-size: 1.27rem;
    }
`;

export const ImagePart = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        font-size: 1rem;
        font-weight: bold;
        margin-top: 10px;
        color: #232428;
    }

    @media(max-width: 768px){
        width: 100%;
    }

    @media(max-width: 480px){
        width: 100%;
        margin: 15px 0;

        span {
            font-size: 1.2rem;
        }
    }
`;

export const Img = styled.img`
    max-height: 67%;
    border-radius: 5px;
    transition: 0.8s;
    margin-bottom: 15px;

    &:hover {
        transform: scale(1.05);
    }

    @media(max-width: 768px){
        max-height: 70%;
    }

    @media(max-width: 480px){
        max-height: 275px;

        &:hover {
            transform: scale(1.9)
        }
    }
`;

export const EmailButton = styled.div`
    min-height: 50px;
    max-width: 90%;
    background-color: #384287;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;

    span {
        font-weight: 400;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #f8fafc;
        margin: 0 10px;
    }

    &:hover {
        background-color: #DCDEF2;

        span {
            color: #384287;
        }
    }

    
    @media(max-width: 768px){
        max-width: 95%;
        padding: 5px;
    }

    @media(max-width: 480px){
        width: 85%;
        height: 75px;

        span{
            font-size: 1.1rem;
        }
    }
`;

export const Copied = styled.div`
    min-height: 50px;
    width: 90%;
    display: flex;
    background-color: #DCDEF2;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 5px;

    span {
        color: #384287;
        font-size: 14px;
        font-weight: 400;
        margin: 0 10px;
    }
`;