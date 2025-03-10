import styled from "styled-components";

export const StyledListItem = styled.li`
  height: 21.625rem;
  width: 18.75rem;
  border: 2px solid var(--grey-color);
  border-radius: 0.3125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  & > div:first-child {
    width: 100%;
    height: 9.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background-grey-color);
  }

  & > div:last-child {
    height: 9.5625rem;
    width: 16.375rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-inline: 1.25rem;
  }

  button {
    width: 6.625rem;
    height: 2.5rem;
    background-color: var(--button-color);
    color: var(--white-color);
    border-radius: 0.5rem;
  }
  img {
    max-height: 100%;
  }

  &:hover {
    border: 2px solid var(--green-color);
    button {
      background-color: var(--green-color);
    }
  }
`;
