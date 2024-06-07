import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserPosts from './components/UserPosts';
import Countdown from './components/Countdown';
import WindowResize from './components/WindowResize';
import InputValidation from './components/InputValidation';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const userID =1;
const isEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
root.render(
  <React.StrictMode>
    {/* <UserPosts userId={userID}/> */}
    {/* <Countdown init = {60} /> */}
    {/* <WindowResize /> */}
    <InputValidation
        typeOfValidation={isEmailValid}
        errorMessage="Please enter a valid email address."
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
