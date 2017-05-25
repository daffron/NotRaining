import React from 'react'

export default (props) => {
  const {}  = props

  return (
    <div className='results'>
    <h1>{props.weatherToday.city}</h1>
    <h2>Today's Weather</h2>
    <div className="today">
    {props.weatherToday.temp}
    {props.weatherToday.description}
    {props.weatherToday.icon}
    {props.weatherToday.low}
    {props.weatherToday.high}
    </div>
    <h2>3 Day Forecast</h2>

    </div>

  )}
