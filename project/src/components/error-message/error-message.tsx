import { useAppSelector } from '../../hooks/useAppDispatch';
import { getErrorMessage } from '../../store/data-process/data-selectors';
import './error-message.css';

export const ErrorMessage = (): JSX.Element | null => {
  const error = useAppSelector(getErrorMessage);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
};
