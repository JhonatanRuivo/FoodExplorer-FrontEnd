import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  padding-bottom: 193px;

  display: flex;
  flex-direction: column;
  position: relative;
`

export const Body = styled.div`
  width: 100%;
  height: 100%;

  padding: 40px 123px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .buttonPrev {
    width: 106px;
    height: 34px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .buttonPrevMobile {
    display: none;
  }

  > form {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 32px;

    > .section {
      width: 100%;
      display: flex;
      gap: 32px;

      .input {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;

        label {
          color: ${({ theme }) => theme.COLORS.LIGHT400};
        }
      }
    }
    #sectionOne {
      #inputImage {
        height: 100%;
        width: 230px;

        .inputFile {
          display: flex;
          gap: 8px;

          background-color: ${({ theme }) => theme.COLORS.DARK800};
          color: ${({ theme }) => theme.COLORS.LIGHT300};

          display: flex;
          border-radius: 8px;
          padding: 12px 32px;

          white-space: nowrap;
          align-items: center;

          &:hover {
          cursor: pointer;
        }
        }

        #selectImage {
          display: none;
        }
      }
      #inputName {
        width: 60%;
      }
      #category {
        width: 40%;
        position: relative;

        select {
          width: 100%;
          background-color: ${({ theme }) => theme.COLORS.DARK800};
          color: ${({ theme }) => theme.COLORS.LIGHT400};
          border: none;
          border-radius: 5px;
          padding: 16px;

          font-family: Roboto;
          font-size: 14px;
          font-weight: 400;

          appearance: none;
          cursor: pointer;
        }
        #icon {
          color: ${({ theme }) => theme.COLORS.LIGHT400};

          position: absolute;
          right: 16px;
          top: 63%;
          cursor: pointer;
        }
      }
    }

    #sectionTwo {
      #selectIngredients {
        width: 100%;
      }
      #ingredients {
        background-color: ${({ theme }) => theme.COLORS.DARK800};
        width: 100%;

        padding: 4px 8px;
        display: flex;
        gap: 16px;
        border-radius: 8px;

        #tag {
          background-color: ${({ theme }) => theme.COLORS.LIGHT600};
          color: ${({ theme }) => theme.COLORS.LIGHT100};

          width: fit-content;
          padding: 10px 16px;
          display: flex;
          gap: 8px;
          border-radius: 8px;
          align-items: center;
        }
        #addTag {
          height: 100%;
          width: 15%;
          
          background-color: transparent;
          color: ${({ theme }) => theme.COLORS.LIGHT500};

          position: relative;

          border-style: dashed;
          border-radius: 8px;

          padding: 10px 16px;

          display: flex;
          gap: 8px;
          align-items: center;

          #inputTag {
            background-color: transparent;
            color: ${({ theme }) => theme.COLORS.LIGHT400};

            width: 100%;
          }

          #addIcon {
            background-color: transparent;
            color: ${({ theme }) => theme.COLORS.LIGHT400}};
          }
        }
      }
      #inputPrice {
        width: 25%;
      }
    }

    #sectionThree {
      #inputDishDescription {
        width: 100%;

        textarea {
          background-color: ${({ theme }) => theme.COLORS.DARK800};
          color: ${({ theme }) => theme.COLORS.LIGHT100};

          width: 100%;
          padding: 14px;
          height: 172px;
          resize: none;

          border-radius: 5px;
          border: none;

          font-family: Roboto;
          font-size: 16px;
          font-weight: 400;

          &:focus {
            outline: none;
            border: 1px solid ${({ theme }) => theme.COLORS.LIGHT100};
          }
        }
      }
    }

    #buttonSave {
      margin: 0 0 0 auto;
      font-size: 14px;
    }
  

  @media (max-width: 1023px) {
    padding: 32px;

    .buttonPrev {
      display: none;
    }
    .buttonPrevMobile {
      width: fit-content;
      height: 34px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    > form {
      gap: 24px;

      #sectionOne {
        flex-direction: column;
        gap: 24px;
        #inputImage {
          width: 100%;
        }
        #inputName {
          width: 100%;
        }
        #category {
          width: 100%;
        }
      }

      #sectionTwo {
        flex-direction: column;
        gap: 24px;
        #inputPrice {
          width: 100%;
        }
      }

      #buttonSave {
        width: 100%;
        font-size: 12px;
      }
    }
  }
`
