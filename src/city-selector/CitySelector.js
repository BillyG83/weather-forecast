import { LitElement, html } from 'lit-element';
import defaultStyles from '../css/styles.js';
import citySelectorStyles from './city-selector.styles.js';
import colorVars from '../css/color-vars.js';
import 'fa-icons';

export class CitySelector extends LitElement {
  static get properties() {
    return {
      cityListFiltered: { type: Array },
    };
  }

  static get styles() {
    return [
      defaultStyles,
      citySelectorStyles
    ]
  }

  selectChanged(e) {
    this.dispatchEvent(new CustomEvent("get-city-lat-lng", { detail: e.target.value }));
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <section class="city-select">
        ${
          this.cityListFiltered.length === 0 ?
            html`
              <div class="city-select__title">
                <fa-icon class="fas fa-exclamation-circle icon" color=${colorVars.grayDark} size="15px"></fa-icon>
                <h2>Sorry we can't find that city</h2>
              </div>
            `
          :
            html`
              <label for="city-list">Select a city</label>
              <div class="city-select__select">
                <fa-icon class="fas fa-chevron-down icon" color=${colorVars.grayDark} size="10px"></fa-icon>
                <select id="city-list" @change=${this.selectChanged}>
                  <option value="" selected disabled>Choose a city:</option>
                  ${this.cityListFiltered.sort().map(
                    city => html`
                      <option value=${city}>${city}</option>
                    `
                  )}
                </select>
              </div>
            `
        }
      </section>
    `
  }
}
