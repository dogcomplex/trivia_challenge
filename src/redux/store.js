import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

/* eslint-disable */
export default createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        process.env.NODE_ENV === 'development' && window.devToolsExtension 
        	? window.devToolsExtension()
        	: (f) => f
    )
);
