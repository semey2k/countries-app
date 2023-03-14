import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <Provider store={store}>
      <Header />
      <App />
    </Provider>
  </BrowserRouter>,
);
