import React from 'react'

export default (props) => {
  let iconURL = `http://openweathermap.org/img/w/${props.weatherToday.icon}.png`
  return (
    <div className='results'>
      <h1>{props.weatherToday.city}</h1>
      <h2>Today's Weather</h2>
      <div className='today'>
        <div className="temperature">
        {props.weatherToday.temp}
        </div>
        <div className="description">
        {props.weatherToday.description}</div>
        <div className="icon"><img src={iconURL} /></div>
        <div className="templow">
        Min: {props.weatherToday.low}</div>
        <div className="temphigh">
        Max: {props.weatherToday.high}</div>
      </div>
      <h2>3 Day Forecast</h2>
      <div className="multiple">
       {futureWeather.map((day) => {
         return 
         <div className={futureWeather.day}>
         {futureWeather.day}
         {futureWeather.temperature}
        {futureWeather.min}
        {futureWeather.max}
         </div>
       })}
      </div>
    </div>
  )
}
