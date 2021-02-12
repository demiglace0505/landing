import { createGlobalStyle } from 'styled-components'

import {colors} from '../abstracts/Variables'

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: ${colors.colorGreyDark2};
    box-sizing: border-box;
    /* background-image: linear-gradient(to left bottom, ${colors.colorPrimary} ,${colors.colorPrimaryDark});
    background-size: cover;
    background-repeat: no-repeat; */

    /* min-height: 100vh; */
  }
`

export default GlobalStyle;