import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
// import App from './App';




ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-g3kgwkjht83e7el3.us.auth0.com"
    clientId="CsJZQB0HT3kDd8qhRJbrWsJLg1x6xI9Z"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
  </Auth0Provider>
);