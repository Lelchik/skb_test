import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('app'))

