import { useAppSelector } from '../../hooks/useAppDispatch';
import './error-message.css';

export const ErrorMessage = (): JSX.Element | null => {
  const { error } = useAppSelector((state) => state);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
};
