import { createGlobalStyle } from 'styled-components';
import { theme } from '../theme';

export const ResetCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${theme.fonts.OpenSansRegular};
    color: ${theme.colors.black};
    -webkit-font-smoothing: antialiased;
  }

  button {
    border: none;
    background-color: ${theme.colors.transparent};
    appearance: none;
    cursor: pointer;
    -webkit-tap-highlight-color: ${theme.colors.transparent};
  }

  a {
    -webkit-tap-highlight-color: ${theme.colors.transparent};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    box-shadow: 0 0 0 1000px ${theme.colors.white} inset;
  }

  input[type=number]::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  input[type=search]{
    appearance: none;
    ::-webkit-search-decoration,
    ::-webkit-search-cancel-button,
    ::-webkit-search-results-button,
    ::-webkit-search-results-decoration {
      display: none;
    }
  }

  input {
    appearance: none;
    background-color: ${theme.colors.transparent};
  }

  textarea {
    appearance: none;
    background-color: ${theme.colors.transparent};
  }

  h1, h2, h3, h4, h5, h6,
  button,
  input,
  select,
  textarea {
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }
  
  ::placeholder {
    color: ${theme.colors.gray};
  }

  .ReactModal__Body--open {
    overflow: hidden;
  }
`;
