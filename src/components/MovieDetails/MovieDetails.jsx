import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

// ========== API ==========

import { getMovieById } from 'services/api';

// ========== styles ==========

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const [error, setError] = useState();

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getMovieById(id)
      .then(({ poster_path, title, popularity, overview, genres }) => {
        const info = {
          poster: `https://image.tmdb.org/t/p/original/${poster_path}`,
          title: title,
          popularity: popularity.toFixed(0),
          overview: overview,
          genresNames: genres.map(genre => genre.name).join(', '),
        };

        setDetails(info);
      })
      .catch(error => setError(error));
  }, [id]);

  return (
    <>
      <button
        className={css.backBtn}
        type="button"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
      {error && <p>{error}</p>}
      {details && (
        <div className={css.detailsWrap}>
          <div className={css.descr}>
            <img
              className={css.detailsImg}
              src={details.poster}
              alt={details.title}
            ></img>

            <div>
              <h1>{details.title}</h1>
              <p>User Score: {details.popularity}%</p>
              <h2>Overview</h2>
              {details.overview ? (
                <p>{details?.overview}</p>
              ) : (
                'Sorry, there is no overview!'
              )}
              <h3>Genres</h3>
              <p>{details.genresNames}</p>
            </div>
          </div>

          <div>
            <h4>Additional information</h4>
            <ul>
              <Link to="cast">Cast</Link>
              <Link to="reviews">Reviews</Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
