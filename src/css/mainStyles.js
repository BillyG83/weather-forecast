import { css } from 'lit-element';

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
    background-color: white;
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
    background-color: #eee;
    padding: 8px;
    border-radius: 4px;
    border: none;
    text-align: center; 
  }
  .weather h2 {
    background-color: white;
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
    background-color: white;
    padding: 12px 24px;
    margin: 8px 16px 20px;
    width: 350px;
    max-width: 100%;
  }
  .weather__day.none {
    border-top: 4px solid #eee;
    border-bottom: 8px solid #eee;
  }
  .weather__day.lightBlue {
    border-top: 4px solid #2193CC;
    border-bottom: 8px solid #2193CC;
  }
  .weather__day.blue {
    border-top: 4px solid #467D99;
    border-bottom: 8px solid #467D99;
  }
  .weather__day.green {
    border-top: 4px solid #0FFFCC;
    border-bottom: 8px solid #0FFFCC;
  }
  .weather__day.red {
    border-top: 4px solid #FF634F;
    border-bottom: 8px solid #FF634F;
  }
  .weather__day.brown {
    border-top: 4px solid #CC2133;
    border-bottom: 8px solid #CC2133;
  }
`

export default mainStyles