import React from 'react'
import ReactDOM from 'react-dom'

// import { store } from "./store/configureStore";
import * as serviceWorker from './serviceWorker'
import './style.scss'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
