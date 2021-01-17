import { css } from 'lit-element';

const weatherDayStyles = css`
  .weather__day {
    background-color: white;
    margin: 8px 16px 20px;
    max-width: 100%;
    padding: 12px 24px;
    width: 350px;
  }
  .day {
    max-height: 0;
    transition: all 0.3s linear;
    overflow: hidden;
  }
  .day.day-0 {
    max-height: 600px;
    transition-delay: 0.2s;
  }
  .day.day-1 {
    max-height: 600px;
    transition-delay: 0.4s;
  }
  .day.day-2 {
    max-height: 600px;
    transition-delay: 0.6s;
  }
  .day.day-3 {
    max-height: 600px;
    transition-delay: 0.8s;
  }
  .day.day-4 {
    max-height: 600px;
    transition-delay: 1s;
  }
  .day.day-5 {
    max-height: 600px;
    transition-delay: 1.2s;
  }
  .day.day-6 {
    max-height: 600px;
    transition-delay: 1.4s;
  }
  .day.day-7 {
    max-height: 600px;
    transition-delay: 1.6s;
  }
  .weather__day.border-none {
    border-top: 4px solid #eee;
    border-bottom: 8px solid #eee;
  }
  .weather__day.border-lightBlue {
    border-top: 4px solid #2193CC;
    border-bottom: 8px solid #2193CC;
  }
  .weather__day.border-blue {
    border-top: 4px solid #467D99;
    border-bottom: 8px solid #467D99;
  }
  .weather__day.border-green {
    border-top: 4px solid #0FFFCC;
    border-bottom: 8px solid #0FFFCC;
  }
  .weather__day.border-red {
    border-top: 4px solid #FF634F;
    border-bottom: 8px solid #FF634F;
  }
  .weather__day.border-brown {
    border-top: 4px solid #CC2133;
    border-bottom: 8px solid #CC2133;
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