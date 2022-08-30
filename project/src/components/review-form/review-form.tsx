import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch';
import { getUserInfo } from '../../services/user-info';
import { postReview } from '../../store/api-actions';
import { Spinner } from '../spinner/spinner';

export const ReviewForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => setRating(Number(event.target.value));
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setComment(event.target.value);

  const currentOffer = useAppSelector((state) => state.currentOffer);
  const isCurrentOfferLoaded = useAppSelector((state) => state.isCurrentOfferLoaded);
  if (!isCurrentOfferLoaded || !currentOffer) {
    return <Spinner />;
  }

  const userInfo = getUserInfo();

  const onReviewFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(postReview({
      id: currentOffer.id,
      comment,
      rating,
      date: new Date().toDateString(),
      user: {
        id: userInfo.id,
        name: userInfo.name,
        isPro: userInfo.isPro,
        avatarUrl: userInfo.avatarUrl,
      },
    }));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(event) => onReviewFormSubmit(event)}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={handleRatingChange} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={handleRatingChange} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={handleRatingChange} />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={handleRatingChange} />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={handleRatingChange} />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" onChange={handleTextChange} placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
};
