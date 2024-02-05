import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-height: 150px;
    background-color: #232428;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 10px;
`;

export const MarcaDagua = styled.span`
    color: #f8fafc;
    height: 1.5rem;
    padding: 5px 10px;
`;

export const VoltarTopo = styled.button`
    height: 60px;
    width: 60px;
    background-color: #384287;
    border-radius: 50%;
    display: none;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    margin-left: 10px;
    
    span {
        color: #f8fafc;
        font-weight: bold;
        font-size: 1.5rem;
    }

    &:hover {
        background-color: #f8fafc;
        border: 2px solid #384287;

        span {
            color: #384287;
        }
    }

    @media(max-width: 480px){
        display: flex;
    }
`;

export const ButtonsSec = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
