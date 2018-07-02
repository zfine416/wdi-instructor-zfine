import React, { Component } from 'react';
import './index.css';
import Search from './components/Search';
import MovieList from './components/MovieList';

class App extends Component {
  constructor(props) {
    super(props);

    // application state
    this.state = {
      inputValue: '',
      activeMovies: [],
    }
    this.updateInputValue = this.updateInputValue.bind(this);
    this.getMovieList = this.getMovieList.bind(this);
    this.getMovieData = this.getMovieData.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.viewFavorites = this.viewFavorites.bind(this);
  }
  getMovieList(e) {
    // prevent default to prevent the form from actually submitting
    e.preventDefault();
    // Typically it's a good idea to hide your API key!!

    // we use fetch to receive data from an API
    // Fetch returns a promise
    // We use promises in JavaScript because it is ansychronous. A promise can be (fulfilled/rejected/pending/settled)
    fetch(`http://www.omdbapi.com/?s=${ this.state.inputValue }&apikey=b154b97f`)
    .then(res => res.json())
    .catch(error => { console.log('Error fetching data', error) })
    .then((jsonRes) => {
      // once we have received data back from the server we need to update state
      // once state is updated the page re-renders
      this.setState({ activeMovies : jsonRes.Search })
    })
  }

  getMovieData(e) {
    const element = e.target;
    const imdbID = (e.target.getAttribute('imdbid'));
    const active = e.target.getAttribute('active');
    if( active === 'true' ) {
      element.setAttribute('active', 'false');
      element.nextSibling.innerHTML = '';
    } else {
      element.setAttribute('active', 'true');
      // Typically it's a good idea to hide your API key!!
      fetch(`http://www.omdbapi.com/?i=${ imdbID }&apikey=b154b97f`)
      .then(res => res.json())
      .catch(error => { console.log('Error fetching data', error) })
      .then((jsonRes) => {
        this.appendMovieData(jsonRes, element);
      })
    }
  }

  appendMovieData(data, element) {
    element.nextSibling.innerHTML = `<p>Rated: ${ data.Rated }</p><p>Genre: ${ data.Genre }</p><p>imdbRating: ${ data.imdbRating }</p><p>Director: ${ data.Director }</p><p>Writers: ${ data.Writer }</p><p>Stars: ${ data.Actors }</p>`;
  }

  addToFavorites(e) {
    var id = e.target.parentNode.getAttribute('id');
    fetch('/favorites', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.activeMovies[Number(id)]),
    })
  }

  viewFavorites() {
    fetch(`/favorites`)
      .then(res => res.json())
      .catch(error => { console.log('Error fetching data', error) })
      .then((jsonRes) => {
        this.setState({ activeMovies : jsonRes })
      })
  }

  updateInputValue(e) {
    this.setState({ inputValue: e.target.value });
  }
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li>My Movie App</li>
            <li className="favorites" onClick = { this.viewFavorites }>View Favorites</li>
          </ul>
        </nav>

        <Search 
          inputValue = { this.state.inputValue }
          updateInputValue = { this.updateInputValue }
          getMovieList = { this.getMovieList }
        />

        <MovieList 
          activeMovies = { this.state.activeMovies }
          getMovieData = { this.getMovieData }
          addToFavorites = { this.addToFavorites }
        />
      </div>
    );
  }
}

export default App;
