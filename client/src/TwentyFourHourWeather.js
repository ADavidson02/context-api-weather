import React from 'react';
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { WeatherElement } from './WeatherElement'

export function TwentyFourHourWeather({ forecast, currTemperatureUnit }) {
  return (
    <>
	<WeatherElement forecastElem={forecast.day} currTemperatureUnit={currTemperatureUnit} timeOfDay={"Day"}/>
	<WeatherElement forecastElem={forecast.night} currTemperatureUnit={currTemperatureUnit} timeOfDay={"Night"}/>	
	</>
	);
}