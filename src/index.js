import React from 'react';
import ReactDOM from 'react-dom/client';
import { BreakpointProvider } from 'react-socks';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import GlobalStyle from 'Global.styled.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BreakpointProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </BreakpointProvider>
  </React.StrictMode>
);
