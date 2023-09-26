import styled from 'styled-components'

export const Container = styled.div`
  width: 85%;
  margin: 0 auto;

  .titleList {
    color: ${({ theme }) => theme.COLORS.LIGHT300};
    width: 100%;
    font-family: Poppins;
    font-size: 32px;
    font-weight: 500;
  }

  #dishesListWrapper {
    width: 100%;
    position: relative;

    #dishesList {
      width: 100%;
      display: flex;
      gap: 27px;
      overflow: auto;
      scroll-behavior: smooth;

      > .arrowLeft,
      .arrowRight {
        background: linear-gradient(
          to left,
          transparent 0%,
          rgba(0, 10, 15, 0.7) 30%,
          rgba(0, 10, 15, 1) 100%
        );
        color: ${({ theme }) => theme.COLORS.LIGHT100};
        width: 150px;

        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: auto;

        display: flex;
        align-items: center;

        @media (max-width: 1023px) {
          width: 35px;
        }
      }

      .arrowRight {
        background: linear-gradient(
          to right,
          transparent 0%,
          rgba(0, 10, 15, 0.7) 50%,
          rgba(0, 10, 15, 1) 100%
        );
        left: auto;
        right: 0;

        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`
