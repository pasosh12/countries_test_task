const SET_FILTER_BY_SIZE = "SET_FILTER_BY_SIZE"
const SET_FILTER_BY_LOCATION = "SET_FILTER_BY_LOCATION"

const initialState = {
    isFilteredBySize: false,
    isFilteredByLocation: false,
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER_BY_SIZE':
            return {...state, isFilteredBySize: action.flag};

        case 'SET_FILTER_BY_LOCATION':
            return {...state, isFilteredByLocation: action.flag};

        default:
            return state;
    }
};

export const setFilterBySize = (flag) => ({type: SET_FILTER_BY_SIZE, flag})
export const setFilterByLocation = (flag) => ({type: SET_FILTER_BY_LOCATION, flag})

export default filterReducer;