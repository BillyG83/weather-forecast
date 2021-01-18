import { css, unsafeCSS } from 'lit-element';
import colorVars from '../css/color-vars.js'

const defaultStyles = css`
  * {
    box-sizing: border-box;
    color: ${unsafeCSS(colorVars.grayDark)};
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }
  .lightBlue {
    color: ${unsafeCSS(colorVars.blueLight)};
  }
  .blue {
    color: ${unsafeCSS(colorVars.blue)};
  }
  .green {
    color: ${unsafeCSS(colorVars.green)};
  }
  .red {
    color: ${unsafeCSS(colorVars.red)};
  }
  .brown {
    color: ${unsafeCSS(colorVars.brown)};
  }
  .none {
    color: ${unsafeCSS(colorVars.none)};
  }
`
export default defaultStyles