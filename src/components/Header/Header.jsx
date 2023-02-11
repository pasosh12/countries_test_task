import React, {useState} from "react"
import c from "./Header.module.css"
import {getCountriesList} from "../../redux/countrySelector";
import {setCountries, setFilteredCountries} from "../../redux/countriesReducer";
import countriesList from "../Body/CountriesList";
import {connect} from "react-redux";
import {NameFilterSelectDropdown} from "./NameFilterSelectDropdown";

const Header = (props) => {
    // function filterAscending
    // function filter descending
    // const sortByNameAscending = () => {
    //     // case func
    //     console.log('ascending')
    // }
    // const sortByNameDescending = () => {
    //
    //     console.log('descending')
    // }

    const sortByAreaSize = () => {

        const areaOfLithuania = props.countriesList.find(country => country.name === 'Lithuania').area
        const countriesSmallerThanAreaOfLithuania = props.countriesList.filter((cl) => cl.area < areaOfLithuania)
        const filteredCountriesLength = countriesSmallerThanAreaOfLithuania.length
        props.setFilteredCountries(countriesSmallerThanAreaOfLithuania, filteredCountriesLength)


    }
    const sortByOceaniaRegion = () => {
        const oceaniaRegionCountries = props.countriesList.filter(country => country.region === 'Oceania')
        props.setFilteredCountries(oceaniaRegionCountries,oceaniaRegionCountries.length)

    }
    return (
        // <div className={c.header}>
        <div>
            <p>Hello world from navbar</p>
            <div>
                <NameFilterSelectDropdown countriesList={props.countriesList}
                                          setFilteredCountries={props.setFilteredCountries}
                />

                <button onClick={sortByAreaSize}>Smaller than Lithuania</button>
                <button onClick={sortByOceaniaRegion}>Sort By Oceania region</button>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        countriesList: getCountriesList(state),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setFilteredCountries: (filteredCountriesList, countriesFilteredCount) => dispatch(setFilteredCountries(filteredCountriesList, countriesFilteredCount))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)