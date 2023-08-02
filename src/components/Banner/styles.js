import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

  border-radius: 5px;
  height: 260px;
  margin: 164px 124px 62px;

  display: flex;

  position: relative;

  white-space: nowrap;

  > img {
    max-width: 632px;
    max-height: 406px;

    position: absolute;
    left: -100px;
    top: -146px;
  }

  > .slogan {
    margin-left: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > h2 {
      font-family: Poppins;
      font-size: 40px;
      font-weight: 500;
    }
  }

  @media (max-width: 950px) {
    display: none;
  }

  @media (max-width: 1240px) {
    height: 205px;
    margin: 123px 93px 46px;

    > img {
      max-width: 648px;
      max-height: 309px;

      position: absolute;
      left: -75px;
      top: -105px;
    }

    .slogan {
      > h2 {
        font-family: Poppins;
        font-size: 30px;
        font-weight: 400;
      }
      > p {
        font-size: 14px;
      }
    }
  }
`
