import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';

var postType = document.getElementById('post-type');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>New Post</h1>
    <div className="post-type">
     <App />
    </div>
  </div>
);

