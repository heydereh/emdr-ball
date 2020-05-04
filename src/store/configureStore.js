import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

/**
 * 
 * preloadedState = localStorage etc.
 */
export const configureStore = () => {

    const middlewares = [thunk, /* logger */];

    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];

    const composedEnhancer = composeWithDevTools(...storeEnhancers);

    const store = createStore(
        rootReducer,
        composedEnhancer,
    )

    return store;
}