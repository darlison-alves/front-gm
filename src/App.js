import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import promise from 'redux-promise'

import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import rootReducer from './redux/reducers';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, promise)(createStore)(rootReducer, devTools)

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  )
}

export default App;
