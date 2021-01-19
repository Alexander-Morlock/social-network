import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/State';

export const reRenderAll = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} thisUserId={state.THIS_USER_ID} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

store.sendRerenderAllToState(reRenderAll);
reportWebVitals();
