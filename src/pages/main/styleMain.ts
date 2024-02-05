import styled from "styled-components";

export const Section = styled.div`
    height: calc(100vh - 70px);
    width: 100%;
    background-image: linear-gradient(to right, #DCDEF2 5%, #E9EDF2 25%, #E9EDF2 75%, #F0F2F4 90%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media(max-width: 768px){
        flex-direction: column-reverse;
    }

    @media(max-width: 480px){
        height: 100%;
        min-height: calc(100vh - 70px);
        flex-direction: column;
    }
`;

export const MainPage = styled.div`
    width: 95%;
    height: 98%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Name = styled.span`
    font-size: 45px;
    font-weight: bold;
    margin: 7px;
    color: #232428;

    @media(max-width: 480px){
        font-size: 3.2rem;
        text-align: center;
        margin: 5px;
    }
`;

export const Apresentation = styled.span`
    font-size: 25px;
    margin-bottom: 10px;
    font-weight: 400;
    color: #232428;

    @media(max-width: 480px){
        font-size: 1.75rem;
        text-align: center;
    }
`;

export const ChoiceCont = styled.div`
    width: 98%;
    height: 98%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2px;
`;

export const ChoiceButtonsCont = styled.div`
    min-height: 45px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    @media(max-width: 480px){
        height: 65px;
    }
`;

export const ButtonChoice = styled.button<{ choiced: boolean }>`
    height: 98%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-right: ${({ choiced }) => choiced? "1px solid #f8fafc" : "none"};
    border-top: ${({ choiced }) => choiced? "1px solid #f8fafc" : "none"};
    border-bottom: ${({ choiced }) => choiced? "none" : "1px solid #f8fafc"};
    border-left: none;
    outline: none;
    background-color: ${({ choiced }) => choiced? "#232428" : "#1d2235"};

    span {
        font-weight: 500;
        margin: 0 8px;
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

    @media(max-width: 480px){
        span {
            font-size: 1.1rem;
        }
    }
`;

export const ButtonChoice2 = styled.button<{ choiced: boolean }>`
    height: 98%;
    border-top-right-radius:  5px;
    border-top-left-radius: 5px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-right: ${({ choiced }) => choiced? "none" : "1px solid #f8fafc"};
    border-top: ${({ choiced }) => choiced? "none" : "1px solid #f8fafc"};
    border-bottom: ${({ choiced }) => choiced? "1px solid #f8fafc" : "none"};
    border-left: ${({ choiced }) => choiced? "none" : "1px solid #f8fafc"};
    outline: none;
    background-color: ${({ choiced }) => choiced? "#232428" : "#1d2235"};

    span {
        font-weight: 500;
        margin: 0 8px;
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

    @media(max-width: 480px){
        span {
            font-size: 1.1rem;
        }
    }
`;