import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

  border-radius: 5px;
  height: 260px;
  width: 85%;
  margin: 164px auto 62px;

  display: flex;

  position: relative;

  animation-name: show;
  animation-duration: 1s;

  > img {
    max-width: 632px;
    max-height: 406px;

    position: absolute;
    left: -4.7%;
    top: -56.4%;
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

  @media (max-width: 1240px) {
    margin: 100px auto 62px;
    width: 85%;
    height: 180px;

    > img {
      max-width: 421px;
      max-height: 270px;

      position: absolute;
      left: -4.4%;
      top: -50%;
    }

    .slogan {
      > h2 {
        font-family: Poppins;
        font-size: 30px;
        font-weight: 400;
      }
      > p {
        font-family: Poppins;
        font-size: 14px;
      }
    }
  }

  @media (max-width: 950px) {
    height: 120px;
    width: 87%;

    margin: 44px auto 62px;

    > img {
      width: 191px;
      height: 149px;

      position: absolute;
      left: -4.4%;
      top: -24.5%;
    }
    .slogan {
      margin-left: 40%;

      > h2 {
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
      }
      > p {
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
  @media (max-width: 428px) {
    > img {
      width: 160px;
      height: 149px;

      position: absolute;
      left: -8.4%;
      top: -24.5%;
    }
    .slogan {
      margin-left: 50%;

      > h2 {
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
      }
      > p {
        font-size: 8px;
        font-weight: 400;
      }
    }
  }

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
    }
  }
`
