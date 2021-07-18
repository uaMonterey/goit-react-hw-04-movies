import React, { Component, Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from './routes';

import AppBar from 'components/AppBar';
import Loader from 'components/Loader';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */),
);

const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-page" */),
);

const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));

const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "not-found-view" */),
);

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <AppBar />

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route exact path={routes.movies} component={MoviesPage} />
            <Route component={NotFoundView} />
            <Redirect exact to={routes.home} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
