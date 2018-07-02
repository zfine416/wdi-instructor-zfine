import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form onSubmit={ this.props.getMovieList } >
        <h1>Enter A Movie:</h1>
        <div className="search-container">
          <input type="text" onChange={ this.props.updateInputValue } value={ this.props.inputValue }/>
          <button>Search</button>  
        </div> 
      </form>
    );
  }
}

export default Search;