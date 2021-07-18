import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import { getMovieByQuery } from '../services/fetchApi';

export default class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  async componentDidMount() {
    if (this.props.location.state !== null) {
      const resp = await getMovieByQuery(this.props.location.state.query);

      this.setState({
        movies: resp.data.results,
        query: this.props.location.state.query,
      });

      //!DELETE COM
      console.log(this.props.location.state.query);
    }
  }

  onChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  onSubmit = async e => {
    e.preventDefault();
    const resp = await getMovieByQuery(this.state.query);
    this.setState({ movies: resp.data.results });
  };

  render() {
    const { query, movies } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={query} onChange={this.onChange} />
          <button>Search</button>
        </form>
        <MoviesList
          movies={movies}
          history={this.props.history}
          query={query}
        />
      </div>
    );
  }
}
