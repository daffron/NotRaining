import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            errorMsg: null,
            searchTerm:''
        }
    }
handleSubmit(e) {
    e.preventDefault()
    const term = this.state.searchTerm
    this.props.handleSearchClick(term)
}
handleChange(e) {
this.setState({
    [e.target.name]: e.target.value
    })
}

render() {
    return (
      <div className="searchForm">
          <form onSubmit = {this.handleSubmit.bind(this)}>
                <input type = 'text'  name= "searchTerm"  onChange = {this.handleChange.bind(this)}></input>
                <button>Search</button>
           </form>
      </div>
    )
  }
}
export default Search