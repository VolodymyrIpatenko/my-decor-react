import React from 'react';
import ReactDOM from 'react-dom/client';
import { BreakpointProvider } from 'react-socks';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import './reset.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BreakpointProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </BreakpointProvider>
  </React.StrictMode>
);
