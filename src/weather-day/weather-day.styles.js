import { css, unsafeCSS } from 'lit-element';
import colorVars from '../css/color-vars.js'

const weatherDayStyles = css`
  .weather__day {
    background-color: white;
    margin: 8px 16px 20px;
    max-width: 100%;
    padding: 12px 24px;
    width: 350px;
  }
  .weather__day.border-none {
    border-top: 4px solid ${unsafeCSS(colorVars.none)};
    border-bottom: 8px solid ${unsafeCSS(colorVars.none)};
  }
  .weather__day.border-lightBlue {
    border-top: 4px solid ${unsafeCSS(colorVars.blueLight)};
    border-bottom: 8px solid ${unsafeCSS(colorVars.blueLight)};
  }
  .weather__day.border-blue {
    border-top: 4px solid ${unsafeCSS(colorVars.blue)};
    border-bottom: 8px solid ${unsafeCSS(colorVars.blue)};
  }
  .weather__day.border-green {
    border-top: 4px solid ${unsafeCSS(colorVars.green)};
    border-bottom: 8px solid ${unsafeCSS(colorVars.green)};
  }
  .weather__day.border-red {
    border-top: 4px solid ${unsafeCSS(colorVars.red)};
    border-bottom: 8px solid ${unsafeCSS(colorVars.red)};
  }
  .weather__day.border-brown {
    border-top: 4px solid ${unsafeCSS(colorVars.brown)};
    border-bottom: 8px solid ${unsafeCSS(colorVars.brown)};
  }
  .day__heading {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .day__heading h3 {
    font-size: 30px;
    margin-bottom: 8px;
  }
  .day__heading p {
    font-size: 24px;
    margin-bottom: 4px;
  }
  .day__heading p:first-of-type {
    font-size: 40px;
    font-weight: 600;
  }
  .day__temps {
    align-items: center;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 24px 0px;
  }
  .day__temps span {
    width: 50%;
  }
  .day__temps span:first-of-type {
    text-align: center;
  }
  .day__temps .icon {
    padding: 4px 8px;
  }
  .day__temps p {
    padding: 4px 0;
  }
  .day__icon .icon {
    display: none;
  }
  .rain .day__icon .icon--cloud-showers-heavy {
    display: block;
  }
  .snow .day__icon .icon--snowflake {
    display: block;
  }
  .clear .day__icon .icon--sun {
    display: block;
  }
  .clouds .day__icon .icon--cloud {
    display: block;
  }
  .extreme .day__icon .icon--bolt {
    display: block;
  }
  .day__details ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }
  .day__details li {
    display: flex;
    padding: 4px 8px 4px 0px;
    width: 50%;
  }
`

export default weatherDayStyles