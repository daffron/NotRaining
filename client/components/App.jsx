import React from 'react'
import Yes from './Yes'
import No from './No'
import {getWeather} from '../api'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      displayHeader: true,
      displayResult: true,
      yes: null,

  weatherToday:{
                  city: '',
                  temp: 0,
                  description: '',
                  icon: '',
                  low: 0,
                  high: 0
                }
              
    }

    this.handleSearchClick = this.handleSearchClick.bind(this)
  
  }

  componentDidMount(){
    this.handleSearchClick('Auckland')
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
        displayResult: true,
      })
          if (res.weather[0].icon == '09d' || res.weather[0].icon == '09n'  || res.weather[0].icon == '10n'  || res.weather[0].icon == '10d' ){

        this.setState ({
          yes: true
        })
      } else {
        this.setState ({
          yes: false
        })
      }
    })
  }



  render(){
    console.log(this.state.weatherToday)
    return (
      <div className="MainApp">

        {this.state.yes&&<Yes/>}
        {!this.state.yes&& <No/>}
      </div>
    )
  }
}

export default App
