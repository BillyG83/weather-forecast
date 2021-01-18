import { html } from 'lit-html';
import '../src/weather-forecast.js';

export default {
  title: 'Weather Forecast',
  component: 'weather-forecast',
};

function Template({ title }) {
  return html`
    <weather-forecast title=${title}></weather-forecast>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'Weather Forecast App',
};
