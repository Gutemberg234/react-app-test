import styled from "styled-components";

export const Container = styled.article`
padding: 11px;
width: 309.33px;
background: var(--white);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 7px;
border-radius: 4px;

>img{
    width: 147px;
}
>h2{
    font-size: 12px;
    font-weight: 700;
}
>h3{
    font-size: 16px;
    font-weight: 700;
}
>button{
    background-color: var(--blue);
    border: none;
    color: var(--white);
    height: 40px;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    span{
        font-size: 12px;
        font-weight: 400;
        display: flex;
        gap: 5px;
    }

    &.add{
        background: var(--green);
    }
}
`;