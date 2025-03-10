import styled from "styled-components";

export const StyledListItem = styled.li`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 0.875rem;
  margin-block: 0.875rem;
  gap: 1.25rem;

  & div:first-child {
    width: 100%;
    max-width: 5.1625rem;
    height: 100%;
    max-height: 5rem;
    background-color: var(--grey-color);
    border-radius: 0.3125rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & div:last-child {
    display: flex;
    justify-content: end;
    flex-grow: 2;

    & > button {
      color: var(--button-color);
    }
  }
`;
