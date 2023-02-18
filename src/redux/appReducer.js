import {getNecessaryCountriesThunk} from "./countriesReducer";

const DATA_FETCH_SUCCEED = 'DATA_FETCH_SUCCEED';

let initialState = {
    dataIsFetched: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_FETCH_SUCCEED: {
            return {
                ...state,
                dataIsFetched: true
            }
        }
        default:
            return state;
    }
}
export const initializedSuccess = () => ({type: DATA_FETCH_SUCCEED});
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getNecessaryCountriesThunk());
    Promise.all([promise]).then(()=>{
        dispatch(initializedSuccess());
    })
}
export default appReducer;
