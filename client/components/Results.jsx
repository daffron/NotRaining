import React from 'react'

export default (props) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const today = new Date()
  const todayDay = days[today.getDay()]
  let iconURL = `http://openweathermap.org/img/w/${props.weatherToday.icon}.png`
  return (
    <div className='results'>
      <h1>{props.weatherToday.city}</h1>
      <h2>Today's Weather</h2>
      <div className='today'>
       {todayDay}
        <div className="temperature">
        {Math.ceil(props.weatherToday.temp)}
        </div>
        <div className="description">
        {props.weatherToday.description}</div>
        <div className="icon"><img src={iconURL} /></div>
        <div className="templow">
        Min: {Math.ceil(props.weatherToday.low)}</div>
        <div className="temphigh">
        Max: {Math.ceil(props.weatherToday.high)}</div>
      </div>
      <h2>3 Day Forecast</h2>
      <div className="multiple">
       {props.futureWeather.map((day) => {
         const a = new Date(day.date * 1000)
         const dayofWeek = days[a.getDay()]
          let dayIcon = `http://openweathermap.org/img/w/${day.icon}.png`
         return (
         <div className="day">
          {dayofWeek}<br />
         {Math.ceil(day.temp)}<br />
         {day.description} <br />
        <img src={dayIcon} />
        {Math.ceil(day.low)}<br />
          {Math.ceil(day.high)}
         </div>
       )
    })}
      </div>
    </div>
  )
}
