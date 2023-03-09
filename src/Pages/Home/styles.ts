import styled from "styled-components";

export const Container = styled.section`
min-height: 100vh;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
gap: 24px;

>div.load{
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}    
`;

export const Spinner = styled.div`
width: 55.41px;
  height: 55.41px;
  border-radius: 50%;
  background: 
    radial-gradient(farthest-side,#F4F4F4 94%,#0000) top/0px 0px no-repeat,
    conic-gradient(#0000 5%,#F4F4F4);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 3.48px),#000 0);
  animation:s3 1s infinite linear;

  @keyframes s3{ 
  100%{transform: rotate(1turn)}
}
`;

export const Products = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-column-gap: 16px;
grid-row-gap: 16px;
`;