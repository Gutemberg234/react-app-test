import styled from "styled-components";

export const Contaier = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 120px;
gap: 11px;
input{
    width: 62px;
    display: block;
    height: 29px;
    border-radius: 4px;
    border: 1px solid var(--gray);
    padding: 0 16px;
}
button{
    width: 18px;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    color: var(--blue);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;