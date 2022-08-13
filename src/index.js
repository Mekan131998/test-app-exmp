import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App';


import { fetchProducts } from './App/Features/Products/productsSlice'
import { store } from './App/Features/store/index'
store.dispatch(fetchProducts())


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='*' element={<App />}/>
        </Routes>
      </Router>
    </Provider> 
  </React.StrictMode>
);
