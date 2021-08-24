import { createGlobalStyle } from 'styled-components';
import { breakpoints } from './variables';

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
  
  .customContainer {
    margin: 0 auto;
    padding: 0 0.5rem;
    max-width: 1320px;
    
    @media (max-width: ${breakpoints.l}) {
      max-width: 1000px;
    }

    @media (max-width: ${breakpoints.m}) {
      max-width: 768px;
    }
    
    @media (max-width: ${breakpoints.s}) {
      padding: 0;
      margin: 0;
    }
  }
  
  .searchContainer {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    
    @media (max-width: ${breakpoints.s}) {
      margin-left: 1rem;
    }
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
