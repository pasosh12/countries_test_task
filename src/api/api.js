import * as axios from "axios";

export const instance = axios.create({
    baseURL: "https://restcountries.com"
});

export const getCountriesAPI = {
    getAllCountries() {
        return instance.get("/all");
    }
};
