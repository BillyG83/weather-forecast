import { html } from 'lit-html';
import '../src/weather-forecast.js';

export default {
  title: 'WeatherForecast',
  component: 'weather-forecast',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <weather-forecast
      style="--weather-forecast-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </weather-forecast>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
