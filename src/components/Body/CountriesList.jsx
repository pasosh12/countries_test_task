import React from "react";
import Pagination from "../../common/Paginator";
import style from './CountryList.module.css'


let CountriesList = (props) => {
    const leftPortionLimitCountries = (props.currentPage - 1) * props.countriesOnPage;
    const rightPortionLimitCountries = (props.currentPage * props.countriesOnPage - 1)

    const countries =
        props.filteredCountries.length !== 0 ?
            props.filteredCountries
            : props.countriesList

    const slicedCountries = countries.slice(leftPortionLimitCountries, rightPortionLimitCountries)

    return (
        <div>
            <Pagination currentPage={props.currentPage} pageChanged={props.pageChanged}
                        countriesTotalCount={props.countriesTotalCount} countriesOnPage={props.countriesOnPage}
                        countriesList={props.countriesList}
            />

            {
                slicedCountries.map((c, index) => {
                    return (
                        <div key={index}
                             className={style.countryBox}>
                            <p className={style.countryName}>
                                {/*// key={c.id}>*/}
                                {c.name}
                            </p>
                            <p className={style.region}>
                                Region : {c.region}
                            </p>
                            <p className={style.area}>
                                Area(sq km) : {c.area}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default CountriesList