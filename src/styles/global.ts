import { createGlobalStyle } from 'styled-components';

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

  .color-primary {
    background-color: #530086;
  }

  .tagsContainer {
    display: flex;
    width: 100%;
    height: 30px;
    margin: 2rem 0 2rem;
  }

  .removeButton {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 2.4rem;
    line-height: 2.4rem;
  }

  .react-photo-gallery--gallery img {
    object-fit: contain;
    max-width: 200px;
    max-height: 200px;
  }

  
`;

export default GlobalStyle;
