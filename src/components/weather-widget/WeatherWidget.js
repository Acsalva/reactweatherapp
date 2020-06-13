import React from 'react';
import PropTypes from 'prop-types';
import {title,txt,lightColorTxt, darkColorTxt, icon, container, tempTitle} from './WeatherWidget.module.scss';
import sunIcon from './sun.svg';
import rainIcon from './light_rain.svg';
import cloudyIcon from './cloudy.svg';

function WeatherWidget ({titleTxt, dayDate, temp, forecast, weather}) {

    let iconWeather;

    switch(weather){
        case 'sunn' : iconWeather = sunIcon;
        break;
        case 'rainy': iconWeather = rainIcon;
        break;
        case 'cloudy' : iconWeather = cloudyIcon;
        break;
        default:
            iconWeather = sunIcon;
    }

    return (
        <div className={container}>
            <h2 className={title}>{titleTxt}</h2>
            <p className={`${txt} ${lightColorTxt}`}>{dayDate}</p>
            <img src={iconWeather} className={icon}/>
            <h3 className={tempTitle}>{temp} </h3>
            <p className={`${txt} ${darkColorTxt}`}>{forecast}</p>
        </div>
    );
}

WeatherWidget.propTypes = {
    titleTxt: PropTypes.string.isRequired,
    dayDate: PropTypes.string.isRequired,
    temp: PropTypes.string.isRequired,
    forecast: PropTypes.string.isRequired,
    weather: PropTypes.oneOf(["sunny", "cloudy", "rainy"])
};

export default WeatherWidget;