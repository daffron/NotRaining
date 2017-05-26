import React from 'react'

export default (props) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const today = new Date()
  const todayDay = days[today.getDay()]
  let iconURL = `http://openweathermap.org/img/w/${props.weatherToday.icon}.png`
  let yesorno = ''
  if (props.weatherToday.icon == '09d' || props.weatherToday.icon == '09n'  || props.weatherToday.icon == '10n'  || props.weatherToday.icon == '10d' ){
    yesorno = 'yes'
  } else {
    yesorno = 'no'
  }
  return (
    <div className='results'>
    
          <h2>{yesorno}</h2>
  
    </div>
  )
}
