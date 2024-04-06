import React from 'react';
import ReactDOM from 'react-dom/client';
import '/src/index.js'
import './index.css';
import RouterDOM from './Router';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterDOM/>
  </React.StrictMode>
);