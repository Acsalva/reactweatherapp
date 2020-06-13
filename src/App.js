import React from 'react';

import WeatherWidget from './components/weather-widget/WeatherWidget.js'
import Jumbotron from './components/jumbotron/Jumbotron.js';

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <WeatherWidget />
    </div>
  );
}

export default App;
 