import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store'

import './App.css';
import { Home } from './views/homePage';

const App = () => {
  return (
    <Provider store={store}>
      <div className="boilerplate-app">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
