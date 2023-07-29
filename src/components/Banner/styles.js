import styled from 'styled-components'

export const Container = styled.div`
  @media (max-width: 425px) {
    background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

    border-radius: 5px;
    width: 90%;
    height: 120px;
    margin: 44px auto 0;

    position: relative;
    display: flex;
    align-items: center;
    gap: 3px;

    > img {
      width: 191px;
      height: 149px;

      position: absolute;
      top: -29px;
      left: -29px;
    }
    > .slogan {
      font-family: Poppins;
      margin-left: 153px;

      > h3 {
        font-size: 16px;
        font-weight: 500;
      }
      > p {
        font-size: 10px;
        font-weight: 400;
      }
    }
  }

  @media (max-width: 375px) {
    > .slogan {
      > h3 {
        font-size: 12px;
        font-weight: 400;
      }
      >p {
        font-size: 8px;
        font-weight: 300; 
      }
    }
  }
`
