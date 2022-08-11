import { Review, ReviewCard } from '../review-card/review-card';

type ReviewsListProps = {
  reviews: Review[];
}

export const ReviewList = ({reviews}: ReviewsListProps): JSX.Element => (
  <ul className="reviews__list">
    { reviews.map((review) => <ReviewCard key={review.id} {...review} />) }
  </ul>
);
