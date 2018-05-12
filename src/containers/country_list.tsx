import * as React from 'react';

class CountryList extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {

        return (
            <table className="table table-hover mt-4">
                <thead>
                    <th>Name</th>
                    <th>Population</th>
                    <th>Area</th>
                    <th>Capital</th>
                    <th>Flag</th>
                </thead>
                <tbody>
                    <tr/>
                </tbody>
            </table>
        );
    }
}

export default CountryList;