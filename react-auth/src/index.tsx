import React, { useDebugValue } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
// import env from "react-dotenv";

ReactDOM.render(
   <Auth0Provider domain="dev-kbd49fa3.us.auth0.com" clientId="JXZn9onBwCVhOcAb6CIrQhDHfenz7xDE" redirectUri={window.location.origin}>
     <App />
   </Auth0Provider>,
  document.getElementById('root')
);

reportWebVitals();
