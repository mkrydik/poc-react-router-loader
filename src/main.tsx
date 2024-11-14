import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import './index.css';

import Store from './stores/Store.ts';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={App()}/>
    </Provider>
  </StrictMode>
);
