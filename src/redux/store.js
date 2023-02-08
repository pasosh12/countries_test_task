import {createStore, combineReducers, applyMiddleware} from "redux";
import countriesReducer from "./countriesReducer";
import thunk from "redux-thunk";
import appReducer from "./appReducer";


let reducersBrunch = combineReducers({
  countriesPage: countriesReducer,
  app:appReducer
});
const store = createStore(reducersBrunch, applyMiddleware(thunk));
window.store = store;
export default store;
