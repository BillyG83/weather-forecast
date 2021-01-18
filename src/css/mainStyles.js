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
  .weather__title {
    align-items: center;
    background-color: ${unsafeCSS(colorVars.white)};
    border: none;
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
    padding: 16px 8px;
    text-align: center;
  }
  .weather__thermometer {
    background-color: ${unsafeCSS(colorVars.grayLight)};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    height: 50px;
    justify-content: flex-end;
    margin: 0 16px;
    position: relative;
    width: 16px;
  }
  .weather__thermometer .color {
    display: block;
    width: 100%;
  }
  .weather__thermometer .min,
  .weather__thermometer .mid,
  .weather__thermometer .max {
    font-size: 8px;
    left: calc(100% + 5px);
    line-height: 8px;
    pointer-events: none;
    position: absolute;
    top: 0;
  }
  .weather__thermometer .max {
    top: 0;
  }
  .weather__thermometer .mid {
    top: calc(50% - 4px);
  }
  .weather__thermometer .min {
    top: calc(100% - 8px);
  }
  .weather__thermometer .circle {
    border-radius: 50%;
    bottom: -5px;
    height: 20px;
    left: calc(50% - 10px);
    position: absolute;
    width: 20px;
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