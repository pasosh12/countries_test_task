import React, {useState} from "react"
import style from "./Header.module.css"
import {getCountriesList, getFilteredCountriesList} from "../../redux/countrySelector";
import {setFilteredCountries} from "../../redux/countriesReducer";
import {connect} from "react-redux";
import {NameFilterSelectDropdown} from "./Filtering/NameFilterSelectDropdown";
import {setFilterByLocation, setFilterBySize} from "../../redux/filterReducer";

const Header = (props) => {
    const countries = props.countriesList;
    const [oneFlag, setOneFlag] = useState(false);
    const [twoFlag, setTwoFlag] = useState(false);
    const [oneFlagDisabled, setOneFlagDisabled] = useState(false);
    const [twoFlagDisabled, setTwoFlagDisabled] = useState(false);

    const handleSmallCountriesClick = () => {
        if (oneFlag && !twoFlag) {
            // If the filter is already active, disable it
            props.setFilteredCountries(countries, countries.length);
            setOneFlag(false);
            props.setFilterBySize(false);
            setOneFlagDisabled(false);
        } else {
            // If the filter is not active, enable it
            const filteredCountries = countries.filter(
                (country) => country.area !== null && country.area < 65300
            );
            props.setFilteredCountries(filteredCountries, filteredCountries.length);
            setOneFlag(true);
            props.setFilterBySize(true);
            setOneFlagDisabled(true);
        }
    };

    const handleOceaniaCountriesClick = () => {
        if (!oneFlag && twoFlag) {
            // If the filter is already active, disable it
            props.setFilteredCountries(countries, countries.length);
            setTwoFlag(false);
            props.setFilterByLocation(false);
            setTwoFlagDisabled(false);
        } else {
            // If the filter is not active, enable it
            const filteredCountries = countries.filter(
                (country) => country.region !== null && country.region === "Oceania"
            );
            props.setFilteredCountries(filteredCountries, filteredCountries.length);
            setTwoFlag(true);
            props.setFilterByLocation(true);
            setTwoFlagDisabled(true);
        }
    };

    return (
        <div>
            <div className={style.title}>REIZ Tech Hometask</div>
            <div className={style.filters}>
                <div className={style.left}>
                    <button
                        onClick={handleSmallCountriesClick}
                        style={{border: oneFlagDisabled ? "solid" : "none"}}
                        disabled={twoFlag}
                    >
                        Smaller than Lithuania
                    </button>

                    <button
                        onClick={handleOceaniaCountriesClick}
                        style={{border: twoFlagDisabled ? "solid" : "none"}}
                        disabled={oneFlag}
                    >
                        Sort By Oceania region
                    </button>
                </div>
                <div className={style.right}>
                    <NameFilterSelectDropdown {...props} />
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