import React from 'react'
import {connect} from 'react-redux';
import { getNecessaryCountriesThunk, setCurrentPage} from "../../redux/countriesReducer"
import {
    getCountriesList,
    getCountriesOnPage,
    getCountriesTotalCount,
    getCurrentPage, getFilteredCountriesList,
} from "../../redux/countrySelector";
import CountriesList from "./CountriesList";


class Body extends React.Component {
    componentDidMount() {
        this.props.getNecessaryCountriesThunk()
    }

    pageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return (
            <>
                <CountriesList
                    countriesList={this.props.countriesList}
                    countriesOnPage={this.props.countriesOnPage}
                    countriesTotalCount={this.props.countriesTotalCount}
                    currentPage={this.props.currentPage}
                    pageChanged={this.pageChanged}
                    filteredCountries={this.props.filteredCountries}
                    {...this.props}
                />


            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countriesList: getCountriesList(state),
        countriesOnPage: getCountriesOnPage(state),
        countriesTotalCount: getCountriesTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetched: state.app.dataIsFetched,
        filteredCountries: getFilteredCountriesList(state),
    }
}
const mapDispatchToProps = (dispatch) => {
    return (
        null
    )
}
const SuperBody = connect(mapStateToProps, {
    setCurrentPage, getNecessaryCountriesThunk
})(Body)
export default SuperBody
