import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Img from './Img';
import Art from './Art';
import Footer from './Footer';
import 'semantic-ui-css/semantic.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const img = ReactDOM.createRoot(document.getElementById('img'));
img.render(
  <React.StrictMode>
    <Img />
  </React.StrictMode>
);

const Articles = ReactDOM.createRoot(document.getElementById('art'));
Articles.render(
  <React.StrictMode>
    <Art />
  </React.StrictMode>
);

const Foot = ReactDOM.createRoot(document.getElementById('foot'));
Foot.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);
