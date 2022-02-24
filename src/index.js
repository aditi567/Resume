import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Carousel from "./Carousel";
import Footer from "./Footer";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <h2 className="section-heading">Marksheets</h2>
    <Carousel /> 
  </React.StrictMode>,
  document.getElementById('marksheets')
);
ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('foot')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
