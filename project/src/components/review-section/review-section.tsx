import { AuthorizationStatus } from '../../constants/api';
import { useAppSelector } from '../../hooks/useAppDispatch';
import { getIsReviewsLoaded, getReviews } from '../../store/data-process/data-selectors';
import { getAuthorizationStatus } from '../../store/user-process/user-selectors';
import { ReviewForm } from '../review-form/review-form';
import { ReviewList } from '../review-list/review-list';
import { Spinner } from '../spinner/spinner';


export const ReviewSection = (): JSX.Element => {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const reviews = useAppSelector(getReviews);
  const isReviewsLoaded = useAppSelector(getIsReviewsLoaded);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      { isReviewsLoaded ? <ReviewList reviews={reviews} /> : <Spinner /> }
      { authStatus === AuthorizationStatus.Auth ? <ReviewForm /> : undefined }
    </section>
  );
};
