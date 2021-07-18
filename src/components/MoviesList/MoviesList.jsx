import { NavLink } from 'react-router-dom';

const MoviesList = ({ movies, history, query }) => {
  console.log('history', history);
  return (
    <ul>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id}>
          <NavLink
            to={{
              pathname: `/movies/${id}`,
              state: { id, from: history.location.pathname, query },
            }}
          >
            <img
              alt={`Poster ${title}`}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'
              }
              width="220"
            ></img>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
