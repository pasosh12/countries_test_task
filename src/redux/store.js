import {createStore, combineReducers, applyMiddleware} from "redux";
import countriesReducer from "./countriesReducer";
import thunk from "redux-thunk";
import appReducer from "./appReducer";
import filterReducer from "./filterReducer";


let reducersBrunch = combineReducers({
  countriesPage: countriesReducer,
  app:appReducer,
  filteredCountries:filterReducer
});
const store = createStore(reducersBrunch, applyMiddleware(thunk));
window.store = store;
export default store;
