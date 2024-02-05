import styled from "styled-components";

export const Container = styled.div`
    height: 85px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    background-color: transparent;
    padding: 5px;
`;

export const IconContainer = styled.button`
    height: 60px;
    width: 60px;
    background-color: #384287;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    
    &:hover {
        transform: scale(1.05);
        background-color: #f8fafc;
        border: 2px solid #384287;
    }
`;

export const IconSpace = styled.span`
    color: #f8fafc;
    font-size: 2.7rem;

    &:hover {
        color:#384287;
    }
`;