import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';


import BlogComponent from "./BlogComponent/BlogComponent";
import List from "./List/List";
import Buttons from "./Buttons/Buttons";
import Todo from "./TodoList/Todo";
import Slider from "./Slider/Slider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BlogComponent />
  </React.StrictMode>
);

reportWebVitals();
