import React from 'react';
import {title,txt,lightColorTxt, darkColorTxt, icon, container, tempTitle} from './WeatherWidget.module.scss';
import peep from './sun.svg';

function WeatherWidget ({}) {

    return (
        <div className={container}>
            <h2 className={title}>tesst</h2>
            <p className={`${txt} ${lightColorTxt}`}>Hi</p>
            <img src={peep} className={icon}/>
            <h3 className={tempTitle}>35C</h3>
            <p className={`${txt} ${darkColorTxt}`}>Slightly crap</p>
        </div>
    );
}

export default WeatherWidget;