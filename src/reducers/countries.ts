export function countriesReducer(state: any = [], action: any) {
    if (action.type === 'ADD_COUNTRY') {
        if (action.payload.data && action.payload.data.length > 0) {
            console.log(action.payload.data);
            return action.payload.data.concat(state);
        }
    }

    return state;
}