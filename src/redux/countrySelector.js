export const getCountriesList = (state) => {
  return state.countriesPage.countriesList;
};
export const getFilteredCountriesList = (state) => {
  return state.countriesPage.filteredCountries;
};
export const getCurrentPage = (state) => {
  return state.countriesPage.currentPage;
};
export const getCountriesOnPage=(state)=>{
  return state.countriesPage.countriesOnPage
}
export const getCountriesTotalCount=(state)=>{
  return state.countriesPage.countriesTotalCount
}
