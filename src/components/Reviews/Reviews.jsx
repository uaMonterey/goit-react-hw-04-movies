import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getReviewsInfo } from 'services/fetchApi';

const Reviews = () => {
  const history = useHistory();

  // console.log('cast', history);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviewsInfo(history.location.state.id).then(resp =>
      setReviews(resp.data.results),
    );
  }, [history.location.state.id]);

  return (
    <>
      <h1>Reviews</h1>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ author, id, content }) => (
            <li key={id}>
              <h4>{`Author ${author}`}</h4>
              <h5>{content}</h5>
            </li>
          ))
        ) : (
          <li>Not found any reviews</li>
        )}
      </ul>
    </>
  );
};

export default Reviews;
