import React from 'react'
import {getWeather} from '../api'

// import Header from './Header'
// import Results from './Results'
import Search from './Search'
// import {getWeather} from '../api'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      lat: 0,
      long: 0,
      displayResult: false,
      displaySearch: true
    }
    // this.getLocation = this.getLocation.bind(this)
    // this.getLocale = this.getLocale.bind(this)
    this.handleSearchClick = this.handleSearchClick.bind(this)
  }

  handleSearchClick(searchterm) {
    console.log(searchterm)
  }

  render(){
    return (
      <div className="MainApp">
        {this.state.displaySearch&& <Search handleSearchClick={this.handleSearchClick}/>}
        {this.state.displayResult&& <Results/>}
      </div>
    )
  }
}

export default App
