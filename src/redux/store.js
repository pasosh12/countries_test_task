import {createStore, combineReducers} from "redux";

let reducersBrunch = combineReducers({

})
const store = createStore(reducersBrunch)
window.store=store
export default store