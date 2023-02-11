import React from 'react'
import {connect} from 'react-redux';
// import ElementList from './ElementList'
import {
    // getCountriesThunk,
    getNecessaryCountriesThunk, setCurrentPage} from "../../redux/countriesReducer"
import {
    getCountriesList,
    getCountriesOnPage,
    getCountriesTotalCount,
    getCurrentPage, getIsFetchingStatus
} from "../../redux/countrySelector";
import CountriesList from "./CountriesList";
import Paginator from "../../common/Paginator";


class Body extends React.Component {
    componentDidMount() {
        this.props.getNecessaryCountriesThunk()
    }

    pageChanged = (pageNumber) => {

        this.props.setCurrentPage(pageNumber)
        // this.props.getNecessaryCountriesThunk()
    }

    render() {
        return (
            <>
                {this.props.isFetching ? '' : null}
                    <CountriesList
                        countriesList={this.props.countriesList}
                        countriesOnPage={this.props.countriesOnPage}
                        countriesTotalCount={this.props.countriesTotalCount}
                        currentPage={this.props.currentPage}
                        pageChanged={this.pageChanged}
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
        isFetched: state.app.dataIsFetched

    }
}
const mapDispatchToProps = (dispatch) => {
    return (
        // getCountries:()
        null
    )
}
const SuperBody = connect(mapStateToProps, {
    // getCountriesThunk,
    setCurrentPage, getNecessaryCountriesThunk})(Body)
export default SuperBody
