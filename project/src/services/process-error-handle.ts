import { ERROR_MESSAGE_DELETE } from '../constants/api';
import { store } from '../store';
import { setError } from '../store/data-process/data-process';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  setTimeout(
    () => store.dispatch(setError(null)),
    ERROR_MESSAGE_DELETE,
  );
};
