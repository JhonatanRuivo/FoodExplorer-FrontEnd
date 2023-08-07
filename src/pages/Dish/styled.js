import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  > .body {
    margin: 25px 123px 0;

    > main {
      padding-top: 42px;
      display: flex;
      align-items: center;
      gap: 48px;

      .imgDish {
        width: 390px;
        height: 389px;
      }
      .description {
        display: flex;
        flex-direction: column;
        gap: 24px;
        font-family: Poppins;

        > h1 {
          font-size: 40px;
          font-weight: 500;
        }
        > p {
          font-size: 24px;
          font-weight: 400;
        }

        > ul {
          display: flex;
          gap: 12px;
        }
      }
    }

    @media (max-width: 768px) {
      margin: 16px 56px 32px;
    }
    > label {
      width: 106px;
      height: 34px;
      display: flex;
      align-items: center;
    }
  }
`
