import { LitElement, html } from 'lit-element';
import defaultStyles from '../css/styles.js'
import weatherDayStyles from './weather-day.styles.js'
import colorVars from '../css/color-vars.js'
import 'fa-icons';

export class WeatherDay extends LitElement {
  static get properties() {
    return {
      dayData: { type: Object },
      index: { type: Number }
    };
  }

  static get styles() {
    return [
      defaultStyles,
      weatherDayStyles,
    ]
  }

  constructor() {
    super();
    this.colorClass = '';
    this.colorValue = '';
  }

  render() {
    switch(true) {
      case this.dayData.temp.day <= -20:
        this.colorClass = 'none';
        this.colorValue = colorVars.none;
        break;
      case this.dayData.temp.day > -20 && this.dayData.temp.day <= -1 :
        this.colorClass = 'lightBlue';
        this.colorValue = colorVars.blueLight;
        break;
      case this.dayData.temp.day > -1 && this.dayData.temp.day <= 10 :
        this.colorClass = 'blue';
        this.colorValue = colorVars.blue;
        break;
      case this.dayData.temp.day > 10 && this.dayData.temp.day <= 25 :
        this.colorClass = 'green';
        this.colorValue = colorVars.green;
        break;
      case this.dayData.temp.day > 25 && this.dayData.temp.day <= 45 :
        this.colorClass = 'red';
        this.colorValue = colorVars.red;
        break;
      case this.dayData.temp.day > 45 :
        this.colorClass = 'brown';
        this.colorValue = colorVars.brown;
        break;
      default:
        this.colorClass = 'none';
        this.colorValue = colorVars.none;
    }

    return html`
      <div id=${`day-${this.index}`} class=${`weather__day border-${this.colorClass} ${this.dayData.weather[0].main.toLowerCase()}`}>
        <div class="day__heading">
          <div class="day__title">
            <h3>${this.dayData.day}</h3>
            <p class=${this.colorClass}>${this.dayData.temp.day.toFixed(0)} &deg;C</p>
            <p>${this.dayData.weather[0].description}</p>
          </div>

          <div class="day__icon">
            <fa-icon class="fas fa-bolt icon icon--bolt" color=${this.colorValue} size="70px"></fa-icon>
            <fa-icon class="fas fa-wind icon icon--wind" color=${this.colorValue} size="70px"></fa-icon>
            <fa-icon class="fas fa-cloud icon icon--cloud" color=${this.colorValue} size="70px"></fa-icon>
            <fa-icon class="fas fa-sun icon icon--sun" color=${this.colorValue} size="70px"></fa-icon>
            <fa-icon class="fas fa-cloud-showers-heavy icon icon--cloud-showers-heavy" color=${this.colorValue} size="70px"></fa-icon>
            <fa-icon class="fas fa-snowflake icon icon--snowflake" color=${this.colorValue} size="70px"></fa-icon>     
          </div>
        </div>
        
        <div class="day__temps">
          <span>
          ${
            this.dayData.temp.day > 25 ?
              html`
                <fa-icon class="fas fa-temperature-high icon icon--temperature-high" color=${this.colorValue} size="50px"></fa-icon>
              `
            :
              html`
                <fa-icon class="fas fa-temperature-low icon icon--temperature-low" color=${this.colorValue} size="50px"></fa-icon>
              `
            }
          </span>

          <span>
            <p>Today ${this.dayData.temp.day} &deg;C</p>
            <p>Max ${this.dayData.temp.max} &deg;C</p>
            <p>Min ${this.dayData.temp.min} &deg;C</p>
          </span>
        </div>

        <div class="day__details">
          <ul>
            <li>Cloud cover: ${this.dayData.clouds}</li>
            <li>Humidity: ${this.dayData.humidity}</li>
            <li>Pressure: ${this.dayData.pressure}</li>
            <li>UVI: ${this.dayData.uvi}</li>
            <li>Wind dir: ${this.dayData.wind_deg}&deg;</li>
            <li>Wind speed: ${this.dayData.wind_speed}</li>
          </ul>
        </div>
      </div>
    `
  }
}
