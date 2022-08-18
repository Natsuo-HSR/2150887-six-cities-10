import { Review } from '../../types/types';

export const ReviewCard = ({
  id,
  userName,
  rating,
  text,
  dateTime,
  formattedDate,
}: Review): JSX.Element => (
  <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt={`Reviews ${id} avatar`} />
      </div>
      <span className="reviews__user-name">{userName}</span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{ width: `${rating * 20}%` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">{text}</p>
      <time className="reviews__time" dateTime={dateTime}>{formattedDate}</time>
    </div>
  </li>
);
