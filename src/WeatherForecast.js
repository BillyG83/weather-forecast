import { LitElement, html } from 'lit-element';
import './weather-day/weather-day.js';
import './city-selector/city-selector.js';
import cityData from './cityData.js';
import defaultStyles from './css/styles.js'
import mainStyles from './css/mainStyles.js'
import 'fa-icons';

export class WeatherForecast extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return [
      defaultStyles, 
      mainStyles
    ]
  }

  constructor() {
    super();
    this.cityList = [];
    this.cityListFiltered = [];
    this.currentCity = '';
    this.title = '7 day forecast';
    this.weatherData = {};
  }

  connectedCallback() {
    super.connectedCallback();
    cityData.map(city => this.cityList.push(city.name));
  }

  getCityLatLng(e) {
    const selectedCity = cityData.filter(city => {
      return city.name === e.detail
    });

    this.cityLocation = {
      'name': e.detail,
      'lat' : selectedCity[0].lat,
      'lng' : selectedCity[0].lng,
    };

    this.getWeatherData();
  }

  getWeatherData = async () => {
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.cityLocation.lat}&lon=${this.cityLocation.lng}&exclude=minutely,hourly,current,alerts&units=metric&appid=5687c0bcc89fc151b90dfd480d38eba6`);
    this.weatherData = await weatherResponse.json();

    const date = new Date();
    let today = date.getDay();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    this.weatherData.daily.forEach((daily, index) => {
      daily.day = index === 0 ? 'Today' : weekday[today];
      today > 5 ? today = 0 : today++;
    });
    
    this.requestUpdate();
  }

  filterCityList(e) {
    this.currentCity = e.target.value;
    this.cityListFiltered = this.cityList.filter(name => name.toLowerCase().includes(this.currentCity.toLowerCase()));
    this.requestUpdate();
  }

  renderWeather() {
    return html`
      <section class="weather">
        <h2>7 day forecast for ${this.cityLocation.name}</h2>
        <div class="weather__week">
          ${this.weatherData.daily.map(
            (day, index) => html`<weather-day .dayData=${day} .index=${index}></weather-day>`
          )}
        </div>
      </section>
    `
  }

  render() {
    return html`
      <main>
        <header class="header">
          <h1>${this.title}</h1>
          <label for="city-search-input">Search for a city:</label>
          <input 
            @keyup=${this.filterCityList}
            @search=${this.filterCityList} 
            id="city-search-input" 
            placeholder="type a city here" 
            type="search" 
          />
        </header>
        
            
        ${
          this.currentCity.length > 0 
          ?
            html`
              <city-selector 
                .cityListFiltered=${this.cityListFiltered} 
                @get-city-lat-lng=${this.getCityLatLng}
              />
            `
          :
            ``
        }

        ${
          this.weatherData.daily && this.weatherData.daily.length > 0
          ?
            this.renderWeather()
          :
            ``
        }

      </main>
    `;
  }
}
