import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  > h3 {
    font-family: 'Poppins';
    font-size: 32px;
    font-style: normal;
    font-weight: 500;

    margin: 49px 124px 23px;
  }
`
export const Section = styled.div`
  background: rgb(0, 10, 15);
  background: linear-gradient(
    90deg,
    rgba(0, 10, 15, 1) 0%,
    rgba(0, 10, 15, 0) 35%,
    rgba(0, 10, 15, 0) 65%,
    rgba(0, 10, 15, 1) 100%
  );
  color: ${({ theme }) => theme.COLORS.LIGHT300};

  position: relative;

  height: 530px;
  max-width: 81%;
  overflow: hidden;
  overflow-x: auto;

  border: none;
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 27px;

  &::-webkit-scrollbar {
    display: none;
  }

  > .arrowLeft,
  .arrowRight {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT100};

    position: absolute;
    &:hover {
      transform: scale(1.2);
      transition: 250ms;
    }
  }
  .arrowLeft {
    left: 0;
  }
  .arrowRight {
    right: 0;
  }
`
