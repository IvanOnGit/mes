import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = document.getElementById('root')!;
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// El HTML ya viene renderizado por el prerender de build (scripts/prerender.mjs),
// así que hidratamos en vez de reemplazar el árbol del DOM desde cero.
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}