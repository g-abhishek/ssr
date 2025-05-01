import React from "react";
import { hydrateRoot } from 'react-dom/client';
import App from './App';

// Read the injected state
const initialState = window.__INITIAL_STATE__ || {};
const { serverTime } = initialState;

hydrateRoot(document.getElementById('root'), <App serverTime={serverTime} />);
