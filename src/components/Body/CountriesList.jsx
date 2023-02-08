import React from "react";
import Pagination from "../../common/Paginator";


let CountriesList = (props) => {
    let leftPortionLimitCountries = (props.currentPage - 1) * props.countriesOnPage;
    let rightPortionLimitCountries = (props.currentPage * props.countriesOnPage) - 1;

    let countries = [];
    for (let i = leftPortionLimitCountries; i <= rightPortionLimitCountries; i++) {
        countries.push(props.countriesList[i]);
    }
    console.log(props)
    return (
        <div>


            <Pagination currentPage={props.currentPage} pageChanged={props.pageChanged}
                        countriesTotalCount={props.countriesTotalCount} countriesOnPage={props.countriesOnPage}
                        countriesList={props.countriesList}
            />


            {
                countries.map(c => {
                    return (
                        <div>
                            <p key={c.id}>
                                {c.name}
                            </p>
                            <p key={c.id}>
                                {c.region}
                            </p>
                            <p key={c.id}>
                                {c.area}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default CountriesList