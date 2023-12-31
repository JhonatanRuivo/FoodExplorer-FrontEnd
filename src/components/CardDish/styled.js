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

  .iconTop {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT300};

    width: 24px;
    height: 22px;

    position: absolute;
    top: 12px;
    right: 16px;
  }

  .card {
    color: ${({ theme }) => theme.COLORS.LIGHT300};
    background: transparent;
    text-decoration: none;

    height: 100%;
    width: 212px;

    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;

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
  }

  > .footerButtons {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  @media (max-width: 1023px) {
    width: 210px;
    height: 292px;

    gap: 12px;

    .card {
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
    }

    > .footerButtons {
      width: 100%;
      flex-direction: column;
      align-items: center;
      gap: 16px;

      .includes {
        display: flex;
        width: 162px;
        height: 32px;
        padding: 12px 24px;
        justify-content: center;
        align-items: center;
        gap: 8px;
      }
    }
  }
`
