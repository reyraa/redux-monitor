import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Listener from './components/listener';
import Main from './components/main';
import store from './store';
import './app.css';
import './icons.css';

const App = () => (
  <Provider store={store}>
    <Main />
    <Listener />
  </Provider>
);

const rootElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);


