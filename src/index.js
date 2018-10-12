import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import {createStore, combineReducers} from 'redux';
import './index.css';
import App from './containers/App';
import {setName} from './reducers';
import { reducer as formReducer } from 'redux-form';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    form: formReducer,
    setName: setName
})
const store = createStore(rootReducer);

ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,document.getElementById('root'));
registerServiceWorker();
