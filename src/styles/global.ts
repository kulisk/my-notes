import { createGlobalStyle } from 'styled-components';
import { colors } from './variables';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    margin: 0 !important;
  }

  a {
    text-decoration: none;
  }

  input:focus,
  button:focus,
  textarea:focus {
    outline: none;
  }

  .customTagsInput {
    border: 0.1rem solid ${colors.primaryLight};
    border-radius: 0.3rem;
    width: 100%;
    height: 40px;
    font-size: 2.4rem;
    font-weight: 500;
    color: #000;
    transition: 0.2s linear all;

    &:focus {
      border: 0.1rem solid ${colors.primary}
    }
  }

  .color-primary {
    background-color: #530086;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('../../fonts/Roboto-Regular.eot');
    src: url('../../fonts/Roboto-Regular.eot?#iefix') format('embedded-opentype'),
    url('../../fonts/Roboto-Regular.woff2') format('woff2'),
    url('../../fonts/Roboto-Regular.woff') format('woff'),
    url('../../fonts/Roboto-Regular.ttf') format('truetype'),
    url('../../fonts/Roboto-Regular.svg#Roboto-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('../../fonts/Roboto-Bold.eot');
    src: url('../../fonts/Roboto-Bold.eot?#iefix') format('embedded-opentype'),
    url('../../fonts/Roboto-Bold.woff2') format('woff2'),
    url('../../fonts/Roboto-Bold.woff') format('woff'),
    url('../../fonts/Roboto-Bold.ttf') format('truetype'),
    url('../../fonts/Roboto-Bold.svg#Roboto-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('../../fonts/Roboto-Medium.eot');
    src: url('../../fonts/Roboto-Medium.eot?#iefix') format('embedded-opentype'),
    url('../../fonts/Roboto-Medium.woff2') format('woff2'),
    url('../../fonts/Roboto-Medium.woff') format('woff'),
    url('../../fonts/Roboto-Medium.ttf') format('truetype'),
    url('../../fonts/Roboto-Medium.svg#Roboto-Medium') format('svg');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
`;

export default GlobalStyle;
