import * as React from 'react';

import { connect } from 'react-redux';

import { CountryListItem } from '../components/country_list_item';

class CountryList extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        if (this.props.countries.length === 0) {
            return null;
        }

        return (
            <table className="table table-hover mt-4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Population</th>
                        <th>Area</th>
                        <th>Capital</th>
                        <th>Flag</th>
                    </tr>
                </thead>
                <tbody>
                   {this.props.countries.map(CountryListItem)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state: any) {
    return { countries: state.countries };
}

const CountryListContainer = connect(mapStateToProps, null)(CountryList);

export default CountryListContainer;