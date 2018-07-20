import axios from 'axios';

export enum ActionTypes {
    ADD_COUNTRY = 'ADD_COUNTRY',
    SORT_BY = 'SORT_BY'
}

const ROOT_URL = 'https://restcountries.eu/rest/v2/name/';

export function addCountry(countryName: string) {
    const promise = axios.get(ROOT_URL + countryName);
    return { type: ActionTypes.ADD_COUNTRY, payload: promise };
}

export function sortBy(fieldName: string, sortingType: string) {
    return { type: ActionTypes.SORT_BY, payload: {'field': fieldName, 'type': sortingType }};
}