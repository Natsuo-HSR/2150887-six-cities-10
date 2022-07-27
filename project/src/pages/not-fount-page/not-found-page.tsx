import { Link } from 'react-router-dom';

export const NotFoundPage = (): JSX.Element => (
  <div className="container">
    <h1>Ошибка 404. Страница не существует.</h1>
    <Link to='/' style={{'color': 'blue'}}>Вернуться в начало</Link>
  </div>
);
