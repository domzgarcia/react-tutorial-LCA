import {applyMiddleware, createStore} from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
};
const reducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_USERS_START":{
            return { ...state, fetching: true};
            break;
        }
        case "FETCH_USERS_ERROR": {
            return { ...state, fetching: false, error: action.payload};
            break;
        }
        case "RECEIVE_USERS": {
            return { ...state, fetching: false, fetched: true, users: action.payload};
            break;
        }
    }
    return state;
}
const middleware = applyMiddleware(promise(), logger());

const store = createStore(reducer, middleware);
store.dispatch({
    type: "FOO",
    payload: axios.get("http://rest.learncode.academy/api/wstern/users")
});


// (dispatch) => {
//     dispatch({type: "FETCH_USERS_START"});
//     axios.get("http://rest.learncode.academy/api/wstern/users")
//         .then( (response) =>{
//             dispatch({type: "RECEIVE_USERS", payload: response.data})
//         })
//         .catch( (err) => {
//             dispatch({type: "FETCH_USERS_ERROR", payload: err})
//         });
// });


/*
import {applyMiddleware, createStore} from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
};
const reducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_USERS_START":{
            return { ...state, fetching: true};
            break;
        }
        case "FETCH_USERS_ERROR": {
            return { ...state, fetching: false, error: action.payload};
            break;
        }
        case "RECEIVE_USERS": {
            return { ...state, fetching: false, fetched: true, users: action.payload};
            break;
        }
    }
    return state;
}
const middleware = applyMiddleware(thunk, logger());
const store = createStore(reducer, middleware);
store.dispatch( (dispatch) => {
    dispatch({type: "FETCH_USERS_START"});

    axios.get("http://rest.learncode.academy/api/wstern/users")
        .then( (response) =>{
            dispatch({type: "RECEIVE_USERS", payload: response.data})
        })
        .catch( (err) => {
            dispatch({type: "FETCH_USERS_ERROR", payload: err})
        });
});
*/



/*
import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_PENDING": {
      return {...state, fetching: true}
      break;
    }
    case "FETCH_USERS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case "FETCH_USERS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload,
      }
      break;
    }
  }
  return state
}

const middleware = applyMiddleware(promise(), thunk, logger())
const store = createStore(reducer, middleware)

store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://rest.learncode.academy/api/wstern/users")
})

*/