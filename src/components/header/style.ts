import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #384287;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: sticky;
    top: 0;
    z-index: 10;
`;

export const MenuLists = styled.div`
    background-color: transparent;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    @media(max-width: 768px){
        justify-content: center;
        margin-right: 13px;
    }
`;

export const ButtonsMenu = styled.button`
    background-color: #232428;
    width: 150px;
    min-height: 45px;
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    margin: 0 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;

    span {
        font-weight: 400;
        margin-left: 8px;
        font-size: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #f8fafc;
    }

    &:hover {
        background-color: #DCDEF2;

        span {
            color: #232428;
        }
    }

    @media(max-width: 768px){
        padding: 2px 10px;
        margin: 0 13px;
    }

    @media(max-width: 480px){
        display: none;
    }
`;

export const SwitchLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    span {
        font-weight: 400;
        font-size: 1rem;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #f8fafc;
        width: 90px;
    }

    @media(max-width: 480px){
        span {
            width: 150px;
            font-size: 1.5rem;
            text-align: justify;
        }
    }
`;

export const Switch = styled.div`
    position: relative;
    margin-left: 8px;
    width: 64px;
    height: 32px;
    background: #232428;
    border-radius: 32px;
    padding: 5px;
    transition: 300ms all;

    &:before {
        content: "";
        position: absolute;
        width: 28px;
        height: 28px;
        border-radius: 35px;
        top: 50%;
        left: 5px;
        background: #DCDEF2;
        transform: translate(0, -50%);
        transition: 300ms all;
    }
`;

export const SwitchInput = styled.input`
    display: none;

    &:checked + ${Switch} {
        background: #DCDEF2;

        &:before {
            background: #232428;
            transform: translate(34px, -50%);
        }
    }
`;