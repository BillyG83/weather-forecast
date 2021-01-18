import { LitElement, html } from 'lit-element';
import './weather-day/weather-day.js';
import './city-selector/city-selector.js';
import cityData from './cityData.js';
import defaultStyles from './css/styles.js'
import mainStyles from './css/mainStyles.js'
import colorVars from './css/color-vars.js'
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

    let averageWeeklyTemp = 0;
    this.weatherData.daily.forEach((daily, index) => {
      daily.day = index === 0 ? 'Today' : weekday[today];
      today > 5 ? today = 0 : today++;
      averageWeeklyTemp += daily.temp.day
    });
    
    this.weeklyAverage = (averageWeeklyTemp / this.weatherData.daily.length).toFixed(0);
    
    switch(true) {
      case this.weeklyAverage <= -20:
        this.weeklyAverageColor = colorVars.none;
        break;
      case this.weeklyAverage > -20 && this.weeklyAverage <= -1 :
        this.weeklyAverageColor = colorVars.blueLight;
        break;
      case this.weeklyAverage > -1 && this.weeklyAverage <= 10 :
        this.weeklyAverageColor = colorVars.blue;
        break;
      case this.weeklyAverage > 10 && this.weeklyAverage <= 25 :
        this.weeklyAverageColor = colorVars.green;
        break;
      case this.weeklyAverage > 25 && this.weeklyAverage <= 45 :
        this.weeklyAverageColor = colorVars.red;
        break;
      case this.weeklyAverage > 45 :
        this.weeklyAverageColor = colorVars.brown;
        break;
      default:
        this.weeklyAverageColor = colorVars.none;
    }

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
        <div class="weather__title">
          <h2>${this.cityLocation.name} weekly average: ${this.weeklyAverage}&deg;C</h2>

          <div class="weather__thermometer">
            <span class="color" style="background-color:${this.weeklyAverageColor}; height:${Number(this.weeklyAverage) + 50}%"></span>
            <span class="min">-50</span>
            <span class="mid">0</span>
            <span class="max">50</span>
            <span class="circle" style="background-color:${this.weeklyAverageColor};"></span>
          </div>
        </div>
          </div>
        </div>
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
          this.currentCity.length > 1 
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
