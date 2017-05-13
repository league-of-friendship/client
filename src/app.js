import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './js/NavBar';
import HomePage from './js/HomePage';
import Footer from './js/Footer';

import './css/styles.scss';

process.env.SERVER_URL = '//' + (process.env.SERVER_URL || 'localhost:8000')

ReactDOM.render(
  <NavBar server={process.env.SERVER_URL} />,
  document.querySelector('.navbar')
);

ReactDOM.render(
  <HomePage />,
  document.querySelector('.root')
);

ReactDOM.render(
  <Footer />,
  document.querySelector('.footer')
);
