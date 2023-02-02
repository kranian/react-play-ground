import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import {RecoilRoot,} from 'recoil';
import {createRoot} from 'react-dom/client';


import {BrowserRouter} from 'react-router-dom';
import App from '@layouts/App';
import reportWebVitals from './reportWebVitals';
import './commonStyles.css';

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
