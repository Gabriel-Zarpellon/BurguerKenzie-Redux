import styled from "styled-components";

export const StyledList = styled.ul`
  width: 100%;
  height: auto;
  margin-top: 1.0625rem;
  display: flex;
  gap: 1.25rem;
  overflow: scroll;

  @media (min-width: 690px) {
    overflow: visible;
    flex-wrap: wrap;
    gap: 3.5rem;
  }
`;

export const StyledResult = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;

  button {
    background-color: var(--button-color);
    color: var(--white-color);
    padding: .25rem;
    border-radius: 3px;

    &:hover{
      background-color: var(--green-color);
    }
  }
`;
