import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getAllProducts } from './actions';
import App from './containers/App';
import './index.css';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(thunk),
    )
)
store.dispatch(getAllProducts());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
