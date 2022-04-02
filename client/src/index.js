import React from 'react';
// import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';


const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );