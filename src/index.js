import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {createRoot} from "react-dom/client"
import thunk from 'redux-thunk';


import App from "./components/App";
import reducers from "./reducers"



const container = document.querySelector("#root");
const root = createRoot(container);



const store = createStore(reducers, applyMiddleware(thunk));

root.render(

  <Provider store={store}>
    <App />
  </Provider>

);


