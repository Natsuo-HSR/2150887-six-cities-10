import { Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/routes';

export const NotFoundPage = (): JSX.Element => (
  <div className="container">
    <h1>Ошибка 404. Страница не существует.</h1>
    <Link to={AppRoutes.Index} style={{'color': 'blue'}}>Вернуться в начало</Link>
  </div>
);
