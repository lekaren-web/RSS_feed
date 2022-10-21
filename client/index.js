import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import App from './app'
import history from './history'
ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
  document.getElementById('app')
)