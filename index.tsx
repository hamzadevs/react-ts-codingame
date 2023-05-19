import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { ButtonAndInput } from './ButtonAndInput';
import { Preview } from './WelcomeTitle';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />

    <ButtonAndInput />

    <Preview user />
  </StrictMode>
);
