import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CookiesProvider } from "react-cookie";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import theUserReducer from './features/theUserSlice';
import loggedInReducer from './features/loggedInSlice';
import darkEnabledReducer from './features/darkEnabledSlice';
import signupSuccessReducer from './features/signupSuccessSlice';
import loginSuccessReducer from './features/loginSuccessSlice';
import logoutSuccessReducer from './features/logoutSuccessSlice';
import wishlistFailReducer from './features/wishlistFailSlice';
import addToCartReducer from './features/addToCartSlice';

const store = configureStore({
  reducer: {
    theUser: theUserReducer,
    loggedIn: loggedInReducer,
    darkEnabled: darkEnabledReducer,
    loginSuccess: loginSuccessReducer,
    logoutSuccess: logoutSuccessReducer,
    signupSuccess: signupSuccessReducer,
    wishlistFail: wishlistFailReducer,
    addToCart: addToCartReducer
  }
});

ReactDOM.render(
  <Provider store={store} >
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
);

