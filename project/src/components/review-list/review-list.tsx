import { Review } from '../../types/types';
import { ReviewCard } from '../review-card/review-card';

type ReviewListProps = {
  reviews: Review[];
}

export const ReviewList = ({reviews}: ReviewListProps): JSX.Element => (
  <ul className="reviews__list">
    { reviews.map((review) => <ReviewCard key={review.id} {...review} />) }
  </ul>
);
