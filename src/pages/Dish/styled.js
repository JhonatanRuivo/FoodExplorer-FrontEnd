import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;

  > .body {
    margin: 25px 123px 140px;

    > label {
      width: 106px;
      height: 34px;
      display: flex;
      align-items: center;
    }

    > .main {
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
        text-align: start;

        > h1 {
          color: ${({ theme }) => theme.COLORS.LIGHT300};
          font-size: 38px;
          font-weight: 500;
        }
        > p {
          color: ${({ theme }) => theme.COLORS.LIGHT300};

          font-size: 20px;
          font-weight: 400;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footerButtons {
          #submitButtonMobile {
            display: none;
          }
          display: flex;
          gap: 33px;
          align-items: center;
          margin-top: 48px;
        }
      }
    }
  }

  @media (max-width: 1023px) {
    > .body {
      margin: 16px 56px 32px;
      > label {
        height: 24px;
      }
      > .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 100px;

        .imgDish {
          width: 264px;
          height: 264px;
        }
        .description {
          text-align: center;
          > h1 {
            font-size: 27px;
          }
          > p {
            font-size: 16px;
          }
          .tags {
            gap: 24px;
            justify-content: center;
          }
          .footerButtons {
            justify-content: space-evenly;

            #submitButtonDesktop {
              display: none;
            }
            #submitButtonMobile {
              display: flex;
            }
          }
        }
      }
    }
  }
`
