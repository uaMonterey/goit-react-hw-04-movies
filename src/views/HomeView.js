import React, { Component } from 'react';
import { getTrendingMovies } from 'services/fetchApi';
import MoviesList from '../components/MoviesList/MoviesList';

class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const resp = await getTrendingMovies();
    this.setState({ movies: resp.data.results });
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1>Tranding Movies</h1>
        <MoviesList movies={movies} history={this.props.history} />
      </>
    );
  }
}

export default HomeView;
