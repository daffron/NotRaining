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
      <div className="day-title">
      <div>T</div>
      <div></div>
      <div></div>
      </div>
       {props.futureWeather.map((day) => {
         const a = new Date(day.date * 1000)
         const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
         const dayofWeek = days[a.getDay()]
         return (
         <div className="day">
          {dayofWeek}
         {day.temp}<br />
         {day.description} <br />
        {day.icon}<br />
        {day.low}<br />
          {day.high}
         </div>
       )
    })}
      </div>
    </div>
  )
}
