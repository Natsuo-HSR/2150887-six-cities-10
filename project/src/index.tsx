import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const AVAILABLE_PLACES_NUMBER = 987;

root.render(
  <React.StrictMode>
    <App
      placesNumber={AVAILABLE_PLACES_NUMBER}
    />
  </React.StrictMode>,
);
