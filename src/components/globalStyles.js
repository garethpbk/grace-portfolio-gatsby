import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    color: #323232;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
  }

  a, p {
    font-family: 'Lato', sans-serif;
  }

  a {
    color: grey;
    text-decoration: none;

    display: block;

    &:hover {
      color: blueviolet;
      text-decoration: overline;

      h1 {
        color: blueviolet;
      }
    }

    h1 {
      color: #323232;
    }
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyle
