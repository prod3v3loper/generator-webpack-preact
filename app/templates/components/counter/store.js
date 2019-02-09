/* store.js */
import * as createStore from "redux-zero";
// import createStore from 'unistore';

const initialState = {
    count: 0,
    text: []
};
const store = createStore( initialState );

export default store;