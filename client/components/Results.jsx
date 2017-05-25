import React from 'react'

export default (props) => {
  let iconURL = `http://openweathermap.org/img/w/${props.weatherToday.icon}.png`
  return (
    <div className='results'>
      <h1>{props.weatherToday.city}</h1>
      <h2>Today's Weather</h2>
      <div className='today'>
        {props.weatherToday.temp}<br />
        {props.weatherToday.description}<br />
        <img src={iconURL} /><br />
        <p>Min: {props.weatherToday.low}<br /></p>
        <p>Max: {props.weatherToday.high}</p>
      </div>
      <h2>3 Day Forecast</h2>
    </div>
  )
}
