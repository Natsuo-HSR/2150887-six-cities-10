import { ReviewForm } from '../review-form/review-form';
import { ReviewList } from '../review-list/review-list';
import { mockReviews } from '../../moks/reviews';

export const ReviewSection = (): JSX.Element => (
  <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{mockReviews.length}</span></h2>
    <ReviewList reviews={mockReviews} />
    <ReviewForm />
  </section>
);
