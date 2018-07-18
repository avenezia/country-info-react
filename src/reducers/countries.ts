import * as _ from 'lodash';

import { State } from '../interfaces';

const initialState: State = {
    countries: [],
  };

export function countriesReducer(state: State = initialState, action: any) {
    if (action.type === 'ADD_COUNTRY') {
        if (action.payload.data && action.payload.data.length > 0) {
            return { ...state, countries: action.payload.data.concat(state.countries) };
        }
    } else if (action.type === 'ORDER_BY') {
        return { ...state, countries: _.orderBy(state.countries, action.payload) };
    }

    return state;
}