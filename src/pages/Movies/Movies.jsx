import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';
import { fetchMovies } from 'services/api';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();

  // load movies on initial render or when search term changes
  useEffect(() => {
    if (!search) {
      return;
    }

    fetchMovies(search)
      .then(({ results }) => {
        setMovies(results);
        // Update the URL with the search query
        navigate(`?query=${search}`);
      })
      .catch(error => setError(error));
  }, [search, navigate]);

  const onMovieSearch = search => {
    setSearch(search);
    setMovies([]);
  };

  return (
    <main>
      <SearchBar onSubmit={onMovieSearch} initialValue={search} />
      {error && <p>{error}</p>}
      {search && movies.length === 0 && (
        <p>
          We do not find any movie with such name. Please, try another keyword!
        </p>
      )}
      {search && movies.length > 0 && (
        <MoviesList movies={movies} search={search} />
      )}
    </main>
  );
};

export default Movies;
