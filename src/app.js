import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './js/NavBar';
import HomePage from './js/HomePage';
import Footer from './js/Footer';

import './css/styles.scss';

ReactDOM.render(
  <NavBar />,
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