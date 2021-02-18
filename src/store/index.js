import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import RootReducer from '../reducers';

const store = new createStore(RootReducer,applyMiddleware(thunk));
// createStore takes a reducer function

export default store;