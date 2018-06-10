export enum ActionTypes {
    ADD_COUNTRY = 'ADD_COUNTRY'
}

export interface Country {
    name: string;
    population: number;
    area: number;
    capital: string;
}

export interface State {
    countries: Array<Country>;
}