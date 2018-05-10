export function addCountry(countryName: string) {
    return { type: "ADD_COUNTRY", payload: countryName };
}

