import styled from "styled-components";

export const Container = styled.header`
    width: var(--desktop);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 74px;

    >img{}
    >a{
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 9.33px;
        >div{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
        }
        p{
            font-size: 14px;
            font-weight: 600;
        }
        span{
            color: var(--gray);
            font-size: 12px;
        }
    }

    @media screen and (max-width: 992px){
        width: 100%;
    }
`;