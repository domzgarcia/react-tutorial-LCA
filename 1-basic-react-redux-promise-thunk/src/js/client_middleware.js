// import React from 'react';
// import ReactDOM from 'react-dom';
// import Layout from './components/Layout';

// const app = document.getElementById('app');
// ReactDOM.render(<Layout/>, app);

import {applyMiddleware, combineReducers, createStore} from 'redux';
const userReducer = (state = {}, action) => {
    switch(action.type){
        case 'CHANGE_USER': 
            state = {...state, name: action.payload}
        break;
        case 'CHANGE_AGE': 
            state = {...state, age: action.payload}
        break;
    }
    return state;
};
const tweetsReducer = (state =[], action) => {
    let arr = [];
    switch(action.type){
        case 'CHANGE_USER':
        arr = state.concat('entry');
        break;
        case 'ERROR': 
            throw new Error('Intentionally Error!');
        break;
    }
    return (arr.length === 0) ? state : arr;
};
const reducer = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
});
const logger = (store) => (next) => (action) => {
    console.log("action fired", action);
    // action.type = "CHANGE_AGE";
    next(action);
};
const error = (store) => (next) => (action) => {
    try {
        next(action);
    } catch(e){
        console.log('Exception', e);
    }
}

const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, middleware);

store.subscribe( () => {
    console.log('hey store changed', store.getState())
});
store.dispatch({type: 'CHANGE_USER', payload: 'Dom'});
store.dispatch({type: 'CHANGE_USER', payload: 'Dom'});
store.dispatch({type: 'CHANGE_AGE', payload: 35});
store.dispatch({type: 'CHANGE_AGE', payload: 35});


/*
const reducer = function(state, action){
    let {type, payload} = action;
    if(type === 'INC'){
        return state+=payload;
    }
    if(type === 'DEC'){
        return state-=payload;
    }
    return state;
};
const store = createStore(reducer, 0);
store.subscribe( () => {
    console.log('hey store changed', store.getState())
});
store.dispatch({type: 'INC', payload: 1});
store.dispatch({type: 'INC', payload: 2});
store.dispatch({type: 'INC', payload: 22});
store.dispatch({type: 'INC', payload: 1});
store.dispatch({type: 'DEC', payload: 1000});
*/