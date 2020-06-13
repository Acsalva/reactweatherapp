import React from 'react';

import WeatherWidget from './components/weather-widget/WeatherWidget.js'
import Jumbotron from './components/jumbotron/Jumbotron.js';

function App() {
  return (
    <div className="App">
      <Jumbotron>5-Day Forecast</Jumbotron>
      <WeatherWidget titleTxt="Friday" dayDate="1st March, 1pm" forecast="Sunny" temp="35C" weather="sunny" />
      <WeatherWidget titleTxt="Saturday" dayDate="2nd March, 1pm" forecast="Cloudy" temp="36C" weather="rainy" />
      <WeatherWidget titleTxt="Sunday" dayDate="3rd March, 1pm" forecast="Cloudy" temp="36C" weather="cloudy" />
    </div>
  );
}

export default App;
 