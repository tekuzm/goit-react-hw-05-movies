import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState();

  const { id } = useParams();

  useEffect(() => {
    getMovieCredits(id)
      .then(response => {
        debugger;
        setCast(response);
      })
      .catch(error => setError(error));
  }, [id]);

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            <img></img>
            <p></p>
            <p>Character:</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
