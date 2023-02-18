import React, {useState} from "react";

const myInlineStyle={
    color:'rgb(143, 255, 143)',
    fontWeight:'bold',
    fontSize:'20px',
};
const Pagination = (props) => {
    // ({currentPage,pageChanged, countriesTotalCount,countriesOnPage}) => {
    // cuseState(0)
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
    return (

        <div>
            {(portionNumber > 1) && <a onClick={() => setPortionNumber((portionNumber - 1))}>...</a>}
            {
                pages.filter((p) => (p >= leftPortionLimit && p <= rightPortionLimit)).map(p => {
                    return (
                        <a
                            key={p.toString()}
                            style={props.currentPage === p ?
                                myInlineStyle
                                // {color: 'red'}
                                : {}}
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