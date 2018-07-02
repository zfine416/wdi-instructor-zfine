import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
  render() {
    // Lets loops through our active movies!!
    var movieList = this.props.activeMovies.map(function(movie, id){
      return <Movie 
        key = { id }
        id = { id }
        imdbID = { movie.imdbID }
        title = { movie.Title }
        poster = { movie.Poster }
        getMovieData = { this.props.getMovieData }
        addToFavorites = { this.props.addToFavorites }
      />;
    }.bind(this));
    return (
      <ul className="movie-list">
        { movieList }
      </ul>
    );
  }
}

export default MovieList;