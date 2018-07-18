import axios from 'axios';

const ROOT_URL = 'https://restcountries.eu/rest/v2/name/';

export function addCountry(countryName: string) {
    const promise = axios.get(ROOT_URL + countryName);
    console.log(promise);
    return { type: 'ADD_COUNTRY', payload: promise };
}

export function orderBy(fieldName: string) {
    return { type: 'ORDER_BY', payload: fieldName };
}