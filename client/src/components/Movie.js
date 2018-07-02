import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <li className="movie-item" id= { this.props.id }>
        <h1> {this.props.title} </h1>
        <div className="favorite" onClick={ this.props.addToFavorites }>ADD TO FAVORITES</div>
        <img alt="" onClick = { this.props.getMovieData } src={ this.props.poster } imdbid={ this.props.imdbID } active='false' />
        <div></div>
      </li>
    );
  }
}

export default Movie;