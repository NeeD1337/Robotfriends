import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Card from './components/Card.jsx';
import 'tachyons';
import App from './containers/App.jsx';
import {robots}from './robots.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
