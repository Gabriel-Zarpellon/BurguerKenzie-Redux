import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --green-color: #27ae60;

  --black-color: #333333;
  --paragraph-color: #828282;

  --button-color: #bdbdbd;
  --white-color: #ffffff;

  --grey-color: #e0e0e0;

  --background-grey-color: #f5f5f5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

ul,
ol {
  list-style: none;
}

img {
 max-width: 100%;
}

button {
  cursor: pointer;
  border: none;
  font-family: inherit;
  background-color: transparent;
}

input {
  border: none;
  background-color: transparent;
}

`;
