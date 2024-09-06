import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import logo from "./images/logo.png"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function MyApp() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home /></>
    },
    {
      path: '/About',
      element: <><Navbar /><About /></>
    },
    {
      path: '/Contact',
      element: <><Navbar /><Contact /></>
    }
  ])
  return (

    <React.Fragment>
      <div id="main-div">
      <div id="header">
        <div id="logo-div">
          <a href="/"><img src={logo} alt='logo' /></a>
        </div>
        <div id="top-bar-div">
          <RouterProvider router={router} />
        </div>
      </div>
      </div>
    </React.Fragment>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <MyApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
