import { css, unsafeCSS } from 'lit-element';
import colorVars from '../css/color-vars.js'

const citySelectorStyles = css`
  .city-select {
    background-color: ${unsafeCSS(colorVars.grayLight)};
    display: block;
    padding: 16px;
    text-align: center;
    width: 100%;
  }
  .city-select__title {
    display: flex;
    justify-content: center;
  }
  .city-select__title .icon {
    margin: 2px 8px 0 0;
  }
  .city-select__title h2 {
    font-size: 18px;
    margin-right: 8px;
  }
  .city-select__select {
    position: relative;
  }
  .city-select__select .icon {
    display: block;
    pointer-events: none;
    position: absolute;
    right: 16px;
    top: 14px;
  }
  .city-select__select select {
    appearance: inherit;
    background-image: none;
    border: none;
    display: block;
    font-size: 16px;
    font-weight: 600;
    margin: 12px 0 0 0;
    max-width: 100%;
    padding: 16px;
    width: 100%;
  }
`

export default citySelectorStyles