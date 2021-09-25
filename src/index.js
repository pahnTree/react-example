import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux' // State management
import { BrowserRouter } from 'react-router-dom' // Routing
import 'bootstrap/dist/css/bootstrap.min.css' // Styles

import App from './components/App'
import reportWebVitals from './reportWebVitals'

import { makeStore } from './redux/store'

// Mock api backend
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./redux/mocks/browser')
  worker.start()
}

ReactDOM.render(
  <Provider store={makeStore()}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
