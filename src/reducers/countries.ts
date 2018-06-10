import { State } from '../interfaces';

const initialState: State = {
    countries: [],
  };

export function countriesReducer(state: State = initialState, action: any) {
    if (action.type === 'ADD_COUNTRY') {
        if (action.payload.data && action.payload.data.length > 0) {
            return { ...state, countries: action.payload.data.concat(state) };
        }
    }

    return state;
}