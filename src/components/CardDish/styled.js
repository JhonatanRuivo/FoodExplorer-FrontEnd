import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK200};
  color: ${({ theme }) => theme.COLORS.LIGHT300};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK300};
  border-radius: 8px;

  position: relative;
  width: 304px;
  height: 462px;
  padding: 24px;
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  #iconTop {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT300};

    width: 24px;
    height: 22px;

    position: absolute;
    top: 12px;
    right: 16px;
  }

  > img {
    width: 176px;
    height: 176px;
  }

  > .dishName {
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: 700;

    white-space: nowrap;
  }

  > .dishDescription {
    color: ${({ theme }) => theme.COLORS.LIGHT400};
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
  }

  > .price {
    color: ${({ theme }) => theme.COLORS.CAKE200};
    font-family: 'Roboto';
    font-size: 32px;
    font-weight: 400;
  }

  > .footerButtons {
    display: flex;
    align-items: center;
    gap: 16px;

    > .amount {
      display: flex;
      gap: 14px;

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
  }

  @media (max-width: 768px) {
    width: 210px;
    height: 292px;

    gap: 12px;

    > img {
      width: 88px;
      height: 88px;
    }

    > .dishName {
      font-size: 14px;
      font-weight: 500;
    }

    > .dishDescription {
      display: none;
    }

    > .price {
      font-size: 16px;
    }

    > .footerButtons {
      width: 100%;
      flex-direction: column;
      align-items: center;
      gap: 16px;

      > .amount {
        > strong {
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
  }
`
