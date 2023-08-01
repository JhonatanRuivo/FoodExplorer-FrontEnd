import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK200};
  color: ${({ theme }) => theme.COLORS.LIGHT300};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK300};
  border-radius: 8px;

  position: relative;
  z-index: -1;
  width: 304px;
  height: 462px;
  padding: 24px;
  margin-top: 23px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  > img {
    width: 176px;
    height: 176px;
  }

  > .iconFav {
    position: absolute;
    top: 12px;
    right: 16px;
  }

  > .dishName {
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: 700;
  }

  > .dishDescription {
    color: ${({ theme }) => theme.COLORS.LIGHT400};
    font-size: 14px;
    font-weight: 400;
  }

  > .price {
    color: ${({ theme }) => theme.COLORS.CAKE200};
    font-size: 32px;
    font-weight: 400;
  }

  > .amount {
    display: flex;
    align-items: center;
    gap: 16px;

    #minus,
    #more {
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.LIGHT100};
    }

    > strong {
      font-size: 20px;
      font-weight: 700;
    }
  }
`
