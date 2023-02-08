// import classes from "../Users/Users.module.css";
import React, {useState} from "react";
import styled from "styled-components"


const Pagination = (props) => {
    console.log(props)

// ({currentPage,pageChanged, countriesTotalCount,countriesOnPage}) => {
    let pages = [];
    let portionSize = props.countriesOnPage;
    let pagesCount = Math.ceil(props.countriesTotalCount / props.countriesOnPage);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionsCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1)

    let leftPortionLimit = (portionNumber - 1) * portionSize + 1;
    let rightPortionLimit = portionNumber * portionSize;
console.log(props)
    return (

        <div>
            {(portionNumber > 1) && <a onClick={() => setPortionNumber((portionNumber - 1))}>...</a>}
            {
                pages.filter(p => (p >= leftPortionLimit && p <= rightPortionLimit)).map(p => {
                    return (
                        <a
                            key={p.id}
                            style={props.currentPage === p ? {color: 'red'} : {}}
                            onClick={(e) => {
                                props.pageChanged(p)
                            }}> {p} </a>

                    )
                })
            }
            {portionNumber < portionsCount && <a onClick={() => setPortionNumber(portionNumber + 1)}>...</a>}
        </div>
    )
}


export default Pagination