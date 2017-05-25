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
   
  }



  render(){
    return (
      <div className="MainApp">
        {this.state.displaySearch&& <Search handleSearchClick={this.handleSearchClick}/>}
        {this.state.displayResult&& <Results weatherToday={this.state.weatherToday}/>}
      </div>
    )
  }
}

export default App
