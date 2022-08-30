import { AuthorizationStatus } from '../../constants/api';
import { useAppSelector } from '../../hooks/useAppDispatch';
import { Review } from '../../types/types';
import { ReviewForm } from '../review-form/review-form';
import { ReviewList } from '../review-list/review-list';

type ReviewSectionProps = {
  reviews: Review[];
}

export const ReviewSection = ({ reviews }: ReviewSectionProps): JSX.Element => {
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewList reviews={reviews} />
      {authStatus === AuthorizationStatus.Auth ? <ReviewForm /> : undefined}
    </section>
  );
};
