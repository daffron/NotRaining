import React from 'react'

// import Header from './Header'
// import Results from './Results'
import Search from './Search'
import {getWeather} from '../api'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      displayResult: false,
      displaySearch: true
    }

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
