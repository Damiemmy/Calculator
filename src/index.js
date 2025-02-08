import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CalContextProvider from './context/CalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CalContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CalContextProvider>
);
