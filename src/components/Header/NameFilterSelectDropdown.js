import React, {useState} from "react";


export const NameFilterSelectDropdown = (props) => {
    const [currentSortingStyle, setCurrentSortingStyle] = useState('default')

    const changeSortStyle = (style) => {
        setCurrentSortingStyle(style)
        sortByName(style)
    }

    const sortByName = (currentSortingStyle) => {
        switch (currentSortingStyle) {
            case 'descending': {
                let filteredDescending = [...props.countriesList].sort((a, b) =>
                    a.name > b.name ? -1 : 1,)
                props.setFilteredCountries(filteredDescending,filteredDescending.length)
                break
            }
            case 'ascending': {
                let filteredAsscending = [...props.countriesList].sort((a, b) =>
                    a.name > b.name ? 1 : -1,)
                props.setFilteredCountries(filteredAsscending,filteredAsscending.length)
                break
            }
            default:
                return props.countriesList
        }
    }
    return (
        <select onChange={(event) => changeSortStyle(event.target.value)}
            value={currentSortingStyle}
        >
            <option value="default" disabled>
                Filter by Name
            </option>
            <option value={'ascending'}>Ascending</option>
            <option value={'descending'}>Descending</option>
        </select>
    )
}