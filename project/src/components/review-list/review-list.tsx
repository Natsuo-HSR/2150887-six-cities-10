import { MAX_REVIEWS_NUMBER } from '../../constants/reviews';
import { Review } from '../../types/types';
import { ReviewCard } from '../review-card/review-card';

type ReviewListProps = {
  reviews: Review[];
}

export const ReviewList = ({reviews}: ReviewListProps): JSX.Element => {
  if (reviews.length > MAX_REVIEWS_NUMBER) {
    reviews = reviews.slice(0, MAX_REVIEWS_NUMBER);
  }

  return (
    <ul className="reviews__list">
      { reviews.map((review) => <ReviewCard key={review.id} {...review} />) }
    </ul>
  );
};
