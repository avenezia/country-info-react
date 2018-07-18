import * as React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { orderBy } from '../actions/index';
import { CountryListItem } from '../components/country_list_item';
import { State } from '../interfaces';

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

const mapStateToProps = (state: State) => state.countries;

const mapDispatchToProps = (dispatch: any) => bindActionCreators({orderBy}, dispatch);

const CountryListContainer = connect(mapStateToProps, mapDispatchToProps)(CountryList);

export default CountryListContainer;