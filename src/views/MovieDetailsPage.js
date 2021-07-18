import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { getMovieById } from '../services/fetchApi';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import routes from 'routes';

class MovieDetailsPage extends Component {
  state = {
    movieDetails: {},
  };

  async componentDidMount() {
    // if (this.props.location.state?.id !== undefined) {
    //   const id = this.props.location.state.id;

    const { movieId } = this.props.match.params;

    const resp = await getMovieById(movieId);
    this.setState({ movieDetails: resp.data });
    // }
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from, { query: location.state.query });
    }
    return history.push(routes.home);
  };

  render() {
    const { title, poster_path, overview } = this.state.movieDetails;

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go Back
        </button>
        <h1>{title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          width="380"
          alt={`Poster ${title}`}
        ></img>
        <p>{overview}</p>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `${this.props.match.url}/cast`,
                state: this.props.location.state,
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${this.props.match.url}/reviews`,
                state: this.props.location.state,
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Route exact path={`${this.props.match.path}/cast`} component={Cast} />
        <Route
          exact
          path={`${this.props.match.path}/reviews`}
          component={Reviews}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
