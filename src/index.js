import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";
import { Provider } from "react-redux";
import store from './store';

const firebaseConfig = {
  apiKey: "AIzaSyB3_XFxGj_RMXwUANBvac33m5miJD0OGnc",
  authDomain: "web-messenger-29894.firebaseapp.com",
  projectId: "web-messenger-29894",
  storageBucket: "web-messenger-29894.appspot.com",
  messagingSenderId: "966043581478",
  appId: "1:966043581478:web:2107b51d1d11f04d837ae7",
  measurementId: "G-C13B1W1K0F",
};

firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
