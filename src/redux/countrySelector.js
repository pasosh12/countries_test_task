import { createSelector } from "reselect";

export const getCountriesList = (state) => {
  return state.countriesPage.countriesList;
};
// export const getCountriesList = createSelector(getCountry, (countries) => {
//   console.log(countries)
//   return countries;
// });
export const getCurrentPage = (state) => {
  return state.countriesPage.currentPage;
};
export const getCountriesOnPage=(state)=>{
  return state.countriesPage.countriesOnPage
}
export const getCountriesTotalCount=(state)=>{
  return state.countriesPage.countriesTotalCount
}
export const getIsFetchingStatus=(state)=> {
  return state.countriesPage.isFetching
}