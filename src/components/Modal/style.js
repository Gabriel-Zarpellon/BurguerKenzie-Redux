import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;

  width: 100%;
  height: 100vh;
  background: #00000040;

  & > div {
    width: clamp(24.8125rem, 5vw, 30.25rem);
    max-width: 100%;
    background-color: var(--white-color);
    border-radius: 0.5rem;
    margin-inline: 0.875rem;

    & > div:first-child {
      width: 100%;
      height: 3.5625rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--green-color);
      border-radius: 0.5rem 0.5rem 0 0;
      padding-inline: 0.875rem;

      & > button {
        color: var(--white-color);
      }
    }
    & > div:last-child {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.875rem;
      padding: 0.875rem;

      & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 2px solid var(--grey-color);
        padding-top: 0.875rem;
      }

      button {
        width: 100%;
        max-width: 454px;
        height: 3.75rem;
        background-color: var(--button-color);
        color: var(--white-color);
        border-radius: 0.5rem;
        font-size: 1rem;
        font-weight: 600;

        &:hover {
          background-color: var(--green-color);
        }
      }
    }
  }
`;
