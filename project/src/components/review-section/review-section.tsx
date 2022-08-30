import { AuthorizationStatus } from '../../constants/api';
import { useAppSelector } from '../../hooks/useAppDispatch';
import { ReviewForm } from '../review-form/review-form';
import { ReviewList } from '../review-list/review-list';
import { Spinner } from '../spinner/spinner';


export const ReviewSection = (): JSX.Element => {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const reviews = useAppSelector((state) => state.reviews);
  const isReviewsLoaded = useAppSelector((state) => state.isReviewsLoaded);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      { isReviewsLoaded ? <ReviewList reviews={reviews} /> : <Spinner /> }
      { authStatus === AuthorizationStatus.Auth ? <ReviewForm /> : undefined }
    </section>
  );
};
