import React, {useState} from "react";


export const NameFilterSelectDropdown = (props) => {
    const [currentSortingStyle, setCurrentSortingStyle] = useState('default')
    const changeSortStyle = (style) => {
        setCurrentSortingStyle(style)
        sortByName(style)
    }
    const saveFilteredCountries = (filteredCountries) => {
        props.setFilteredCountries(filteredCountries, filteredCountries.length)

    }
    const sortByName = (currentSortingStyle) => {
        let countriesToSort = props.filteredCountries.length !== 0 ? props.filteredCountries : props.countriesList
        let sortedCountries = [];
        switch (currentSortingStyle) {

            case 'descending': {
                sortedCountries = countriesToSort.sort((a, b) =>
                    a.name > b.name ? -1 : 1,)
                break
            }
            case 'ascending': {
                sortedCountries = countriesToSort.sort((a, b) =>
                    a.name > b.name ? 1 : -1,)
                break
            }
            default:
                break
        }
        saveFilteredCountries(sortedCountries)
    }
    return (
        <select onChange={(event) => changeSortStyle(event.target.value)}
                value={currentSortingStyle}>
            <option value="default" disabled>
                Filter by Name
            </option>
            <option value={'ascending'}>Ascending</option>
            <option value={'descending'}>Descending</option>
        </select>
    )
}