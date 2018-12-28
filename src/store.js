import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

let console = window.console;

/*
    when created store initial store state value
*/
let initialState = {
    header: {
        visible: true
    },
    history: {
        pathname: '456'
    }
}

/* 
    logger MiddleWare
    @param {} store -> 'store'
    @param {} next -> 'next'
    @param {} action -> 'action'
*/
const logger = store => next => action => {
    let result;
    console.log('이전 상태', store.getState());
    console.log('액션', action);
    result = next(action);
    console.log('다음 상태', store.getState());
    return result;
}

// redux dev tool for chrome
// const reduxDevToolsExtension = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const storeFactory = createStore(reducers, initialState, applyMiddleware(logger));

export default storeFactory;