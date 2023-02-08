import axios from "axios";

export const instance = axios.create({
    baseURL: "https://restcountries.com/v2/",
});

export const getCountriesAPI = {
    getAllCountries(pageNumber, countriesOnPage) {
        return instance.get("all");
    },
    getNecessaryCountries() {
        return instance.get(`all/?fields=name,region,area`);
    },
    getByName(name) {
        return instance.get(`name/${name}`);
    },
    getByFullName(fullname) {
        return instance.get(`name/${fullname}?fullText=true`);
    },
    getByCode(code) {
        return instance.get(`alpha/${code}`);
    },
    getByListOfCodes(code1, code2, code3) {
        return instance.get(`alpha?codes=${code1},${code2},${code3}`);
    },
    getByCurrency(currency) {
        return instance.get(`currency/${currency}`);
    },
    getByLanguage(lang) {
        return instance.get(`lang/${lang}`);
    },
    getByCapitalCity(capital) {
        return instance.get(`capital/${capital}`);
    },
    getByCallingCode(callingCode) {
        return instance.get(`callingcode/${callingCode}`);
    },
    getByContinent(region) {
        return instance.get(`region/${region}`);
    },
    byRegionalBlock(regionalbloc) {
        return instance.get(`regionalbloc/${regionalbloc}`);
    },
};
