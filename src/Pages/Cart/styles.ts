import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 24px;
  width: var(--desktop);
  margin: 0 auto;

  > div.load {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 992px) {
    width: var(--mobile);
  }
`;

export const Spinner = styled.div`
  width: 55.41px;
  height: 55.41px;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #f4f4f4 94%, #0000) top/0px 0px
      no-repeat,
    conic-gradient(#0000 5%, #f4f4f4);
  -webkit-mask: radial-gradient(
    farthest-side,
    #0000 calc(100% - 3.48px),
    #000 0
  );
  animation: s3 1s infinite linear;

  @keyframes s3 {
    100% {
      transform: rotate(1turn);
    }
  }
`;

export const Products = styled.div`
  background-color: var(--white);
  width: 100%;
  border-radius: 4px;
  padding: 24px;
  table {
    width: 100%;
    thead {
      td {
        font-weight: 700;
        font-size: 14px;
        text-transform: uppercase;
        color: var(--gray);
      }
    }
    tbody {
      tr {
        td {
          height: 114px;
          vertical-align: middle;
          margin-bottom: 15px;
          &:last-child {
            > button.delete {
              float: right;
              background-color: transparent;
              border: none;
              color: var(--blue);
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            }
          }
          img {
            width: 89px;
          }
          h2 {
            font-size: 14px;
            font-weight: 700;
          }
          h3 {
            font-size: 16px;
            font-weight: 700;
          }
          &:first-child {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 52px;
            height: 114px;
            margin-top: 15px;
            > div {
              display: flex;
              flex-direction: column;
            }
          }
        }
        &:last-child {
          td {
            margin-bottom: 21px;
          }
        }
      }
    }

    tfoot {
      border-top: 1px solid var(--gray);
      td {
        padding-top: 21px;
        vertical-align: middle;
        > div {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 15px;
        }
      }
      button {
        height: 40px;
        background: var(--blue);
        border: none;
        color: var(--white);
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        width: 235.42px;
        border-radius: 4px;
        cursor: pointer;
        @media screen and (max-width: 992px) {
          width: 100%;
        }
      }

      span {
        font-size: 14px;
        font-weight: 700;
        color: var(--gray);
        text-align: left;
      }
      h4 {
        font-size: 24px;
        font-weight: 700;
      }
    }
  }
  td.td-mobile{
    >div:first-child{
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3{
        font-size: 16px;
        font-weight: 700;
      }
      button{
        background-color: transparent;
        border: none;
        color: var(--blue);
      }
    }
    >div:last-child{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      p{
        font-size: 12px;
        font-weight: 700;
        color: var(--gray);
        text-transform: uppercase;
      }
      span{
        font-size: 16px;
        font-weight: 700;
        counter-reset: var(--night);
      }
    }
  }
`;

export const Empty = styled.div`
  background-color: var(--white);
  height: 532px;
  width: var(--desktop);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  border-radius: 4px;
  h2 {
    font-size: 20px;
    font-weight: 700;
  }
  img {
    display: block;
    width: 447px;
    @media screen and (max-width: 992px){
      width: 100%;
    }
  }
  a {
    background-color: var(--blue);
    width: 180px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: var(--white);
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
  }
`;

export const Complete = styled.div`
  background-color: var(--white);
  height: 532px;
  width: var(--desktop);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  border-radius: 4px;
  h2 {
    font-size: 20px;
    font-weight: 700;
  }
  img {
    display: block;
    width: 294px;
    @media screen and (max-width: 992px){
      width: 60%;
    }
  }
  button {
    background-color: var(--blue);
    width: 180px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: var(--white);
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
  }
`;
