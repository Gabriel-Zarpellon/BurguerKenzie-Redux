import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--background-grey-color);
`;

export const StyledBox = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:first-child {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1.875rem;
    gap: 1.875rem;
  }

  form {
    display: none;
    width: 100%;
    justify-content: end;
    position: relative;

    input {
      border: none;
      background-color: var(--white-color);
      width: 100%;
      max-width: 300px;
      height: 40px;
      border-radius: 0.5rem;
      padding-left: 0.625rem;

      &:focus {
        outline: 1px solid var(--green-color);
      }
    }

    button {
      color: var(--button-color);
      position: absolute;
      top: 10px;
      right: 5px;
    }

    @media (min-width: 580px) {
      display: flex;
    }
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  background-image: url("/src/assets/Cart.svg");
  background-repeat: no-repeat;
  background-position: center;
  height: 1.5625rem;
  width: 1.5625rem;
  position: relative;

  span {
    position: absolute;
    top: -14px;
    right: -12px;
    background-color: var(--green-color);
    padding: 4px 5px;
    border-radius: 0.4375rem;
    color: var(--white-color);
    font-weight: 900;
  }
`;
