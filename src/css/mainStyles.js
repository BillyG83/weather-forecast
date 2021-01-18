import { css, unsafeCSS } from 'lit-element';
import colorVars from '../css/color-vars.js'

export const mainStyles = css`
  :host {
    background-image: url('./img/sky.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    height: 100vh;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0;
    width: 100vw;
  }
  .header {
    align-items: center;
    background-color: ${unsafeCSS(colorVars.white)};
    display: flex;
    flex-direction: column;
    height: 20vh;
    justify-content: center;
    padding: 16px 12px 20px 12px;
  }
  h1 {
    margin-bottom: 16px;
  }
  .header label {
    display: block;
    margin-bottom: 8px;
  }
  .header input {
    background-color: ${unsafeCSS(colorVars.grayLight)};
    padding: 8px;
    border-radius: 4px;
    border: none;
    text-align: center; 
  }
  .weather h2 {
    background-color: ${unsafeCSS(colorVars.white)};
    border: none;
    margin-bottom: 12px;
    padding: 16px 8px;
    text-align: center;
  }
  .weather__week {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin: 0 auto;
    max-width: 1560px;
  }
  .weather__day {
    background-color: ${unsafeCSS(colorVars.white)};
    padding: 12px 24px;
    margin: 8px 16px 20px;
    width: 350px;
    max-width: 100%;
  }
  .weather__day.none {
    border-top: 4px solid ${unsafeCSS(colorVars.none)};
    border-bottom: 8px solid ${unsafeCSS(colorVars.none)};
  }
  .weather__day.lightBlue {
    border-top: 4px solid ${unsafeCSS(colorVars.blueLight)};
    border-bottom: 8px solid ${unsafeCSS(colorVars.blueLight)};
  }
  .weather__day.blue {
    border-top: 4px solid ${unsafeCSS(colorVars.blue)};
    border-bottom: 8px solid ${unsafeCSS(colorVars.blue)};
  }
  .weather__day.green {
    border-top: 4px solid ${unsafeCSS(colorVars.green)};
    border-bottom: 8px solid ${unsafeCSS(colorVars.green)};
  }
  .weather__day.red {
    border-top: 4px solid ${unsafeCSS(colorVars.red)};
    border-bottom: 8px solid ${unsafeCSS(colorVars.red)};
  }
  .weather__day.brown {
    border-top: 4px solid ${unsafeCSS(colorVars.brown)};
    border-bottom: 8px solid ${unsafeCSS(colorVars.brown)};
  }
`

export default mainStyles