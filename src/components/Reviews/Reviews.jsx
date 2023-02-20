import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState();

  const { id } = useParams();

  // useEffect(() => {
  //   getMovieReviews(id)
  //     .then(response => console.log(response))
  //     .catch(error => setError(error));
  // }, [id]);

  return (
    <>
      {error && <p>{error}</p>}
      {reviews ? (
        <ul>
          <li></li>
        </ul>
      ) : (
        'We do not have any reviews for this movie.'
      )}
    </>
  );
};

export default Reviews;
