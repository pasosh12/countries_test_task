import React, {useState} from "react"
import style from "./Header.module.css"
import {getCountriesList, getFilteredCountriesList} from "../../redux/countrySelector";
import {setFilteredCountries} from "../../redux/countriesReducer";
import {connect} from "react-redux";
import {NameFilterSelectDropdown} from "./Filtering/NameFilterSelectDropdown";
import {setFilterByLocation, setFilterBySize} from "../../redux/filterReducer";

const Header = (props) => {
    const countries = props.countriesList
    const [filter, setFilter] = useState(null)
    const [regionIsPushed, buttonRegionChange] = useState(false)
    const [oceaniaIsPushed, buttonLocationChange] = useState(false)

    const handleButton = (flag) => {


    }
    const handleSmallCountriesClick = () => {
        const filteredCountries = (countries.filter(country => country.area !== null && country.area < 65300));
        props.setFilteredCountries(filteredCountries, filteredCountries.length)
        props.setFilterBySize(!props.isFilteredBySize)
    };
    const handleOceaniaCountriesClick = () => {
        const filteredCountries = (countries.filter(country => country.region !== null && country.region === 'Oceania'));
        props.setFilteredCountries(filteredCountries, filteredCountries.length)
        props.setFilterByLocation(!props.isFilteredByLocation)

    };
    return (
        <div>
            <div className={style.title}>REIZ Tech Hometask</div>
            <div className={style.filters}>
                <div className={style.left}>
                    <button
                        onClick={handleSmallCountriesClick}
                    >Smaller than Lithuania
                    </button>

                    <button
                        onClick={handleOceaniaCountriesClick}
                    >Sort By Oceania region
                    </button>
                </div>
                <div className={style.right}>
                    <NameFilterSelectDropdown {...props}
                    />
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        countriesList: getCountriesList(state),
        isFilteredBySize: state.filteredCountries.isFilteredBySize,
        isFilteredByLocation: state.filteredCountries.isFilteredByLocation,
        filteredCountries: getFilteredCountriesList(state),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setFilterBySize: (flag) => dispatch(setFilterBySize(flag)),
        setFilterByLocation: (flag) => dispatch(setFilterByLocation(flag)),
        setFilteredCountries: (filteredCountriesList, countriesFilteredCount) => dispatch(setFilteredCountries(filteredCountriesList, countriesFilteredCount)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)