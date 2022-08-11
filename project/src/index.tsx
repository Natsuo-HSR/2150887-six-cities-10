import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { favorites, mockOffers } from './moks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      offers={mockOffers}
      favorites={favorites}
    />
  </React.StrictMode>,
);
