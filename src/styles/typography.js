import styled, { css } from "styled-components";

export const StyledParagraph = styled.p`
  font-size: 0.875rem;
  ${({ weight }) => {
    if (weight) {
      return css`
        font-weight: ${weight};
      `;
    } else {
      return css`
        font-weight: 400;
      `;
    }
  }}

  ${({ color }) => {
    if (color) {
      if (color == "green") {
        return css`
          color: var(--green-color);
        `;
      } else if (color == "black") {
        return css`
          color: var(--black-color);
        `;
      }
    } else {
      return css`
        color: var(--paragraph-color);
      `;
    }
  }}
`;

export const StyledTitle = styled.h1`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.7;

  ${({ color }) => {
    if (color) {
      if (color == "green") {
        return css`
          color: var(--green-color);
        `;
      } else if (color == "white") {
        return css`
          color: var(--white-color);
        `;
      }
    } else {
      return css`
        color: var(--black-color);
      `;
    }
  }}
`;
