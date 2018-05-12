export function countries(state: any = [], action: any) {
    if (action.type === 'ADD_COUNTRY') {
        console.log(action.payload.data[0]);
    }

    return state;
}