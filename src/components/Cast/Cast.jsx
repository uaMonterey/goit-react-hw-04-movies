import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getCastInfo } from 'services/fetchApi';

const Cast = () => {
  const history = useHistory();

  const [cast, setCast] = useState([]);
  useEffect(() => {
    getCastInfo(history.location.state.id).then(resp =>
      setCast(resp.data.cast),
    );
  }, [history.location.state.id]);

  return (
    <>
      <h1>Cast</h1>
      <ul>
        {cast.length > 0 ? (
          cast.map(({ cast_id, name, profile_path, character }) => (
            <li key={cast_id}>
              <img
                alt={name}
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                width="200"
              ></img>
              <h2>{name}</h2>
              <h4>{`Character: ${character}`}</h4>
            </li>
          ))
        ) : (
          <li>Not found any cast</li>
        )}
      </ul>
    </>
  );
};

export default Cast;
