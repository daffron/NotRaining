import React from 'react'

// import Header from './Header'
import Results from './Results'
import Search from './Search'
import {getWeather} from '../api'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      displayResult: false,
      displaySearch: true,
      weatherToday:{
                  city: '',
                  temp: 0,
                  description: '',
                  icon: '',
                  low: 0,
                  high: 0
                },
      weatherPlusOne: {
                  temp: 0,
                  description: '',
                  icon: '',
                  low: 0,
                  high: 0

      },
      weatherPlusTwo:{
                  temp: 0,
                  description: '',
                  icon: '',
                  low: 0,
                  high: 0
      },
      weatherPlusThree: {
                  temp: 0,
                  description: '',
                  icon: '',
                  low: 0,
                  high: 0
      }                
    }

    this.handleSearchClick = this.handleSearchClick.bind(this)
  }

  handleSearchClick(searchterm) {
    getWeather(searchterm,(err,res) => {
      if(err) return err
      this.setState({
        weatherToday: {
          city: res.name,
          temp: res.main.temp,
          description: res.weather[0].description,
          icon: res.weather[0].icon,
          low: res.main.temp_min,
          high: res.main.temp_max
        },
        displayResult: true
      })

    })
   get3DForecast(searchterm,(err,res) => {
      if (err) return err
      this.setState({
      weatherPlusOne: {
                  temp: res.list[1].temp.day,
                  description: res.list[1].weather[0].description,
                  icon: res.list[1].weather[0].icon,
                  low: res.list[1].temp.min,
                  high: res.list[1].temp.max

      },
      weatherPlusTwo:{
                  temp: res.list[2].temp.day,
                  description: res.list[2].weather[0].description,
                  icon: res.list[2].weather[0].icon,
                  low: res.list[2].temp.min,
                  high: res.list[2].temp.max
        },
      weatherPlusThree:{
                  temp: res.list[3].temp.day,
                  description: res.list[3].weather[0].description,
                  icon: res.list[3].weather[0].icon,
                  low: res.list[3].temp.min,
                  high: res.list[3].temp.max
        }          
      })
   })
  }



  render(){
    console.log(this.state)
    return (
      <div className="MainApp">
        {this.state.displaySearch&& <Search handleSearchClick={this.handleSearchClick}/>}
        {this.state.displayResult&& <Results weatherToday={this.state.weatherToday}/>}
      </div>
    )
  }
}

export default App
