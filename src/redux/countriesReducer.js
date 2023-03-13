import {getCountriesAPI} from "../api/api"

const SET_COUNTRIES_LIST = 'SET_COUNTRIES_LIST'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_COUNTRIES_TOTAL_COUNT = 'SET_COUNTRIES_TOTAL_COUNT'
const SET_FETCH_STATUS = 'SET_FETCH_STATUS'
const SET_FILTERED_COUNTRIES = 'SET_FILTERED_COUNTRIES'

let initialState = {
    countriesList: [],
    countriesOnPage: 50,
    countriesTotalCount: 1,
    currentPage: 1,
    pagesCount: 1,
    isFetching: false,
    filteredCountries: [],

}
const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES_LIST:
            return {
                ...state,
                countriesList: action.countries,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_COUNTRIES_TOTAL_COUNT:
            return {
                ...state, countriesTotalCount: action.totalCount
            }
        case SET_FETCH_STATUS:
            return {
                ...state, isFetching: action.fetchStatus
            }
        case SET_FILTERED_COUNTRIES:
            return {
                ...state, filteredCountries: [...action.filteredCountries]
            }

        default :
            return state

    }
}

const setCountries = (countries) => {
    return ({type: SET_COUNTRIES_LIST, countries})
}
const setNewFilteredCountries = (filteredCountries) => {
    return ({type: SET_FILTERED_COUNTRIES, filteredCountries})
}
export const setFilteredCountries = (filteredCountries, countriesTotalCount) => {
    return (dispatch) => {
        dispatch(setNewFilteredCountries(filteredCountries))
        dispatch(setCountriesTotalCount(countriesTotalCount))
    }
}
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, currentPage: pageNumber})
export const setCountriesTotalCount = (count) => ({type: SET_COUNTRIES_TOTAL_COUNT, totalCount: count})
export const setFetchingStatus = (fetchStatus) => ({type: SET_FETCH_STATUS, fetchStatus})
export const getNecessaryCountriesThunk = () => {
    return async (dispatch) => {
        dispatch(setFetchingStatus(true))
        let response = await getCountriesAPI.getNecessaryCountries()
        dispatch(setCountries(response.data))
        dispatch(setFetchingStatus(false))
        dispatch(setCountriesTotalCount(response.data.length))
    }
}

export default countriesReducer
