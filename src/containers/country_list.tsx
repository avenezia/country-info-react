import * as $ from 'jquery';

import * as React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sortBy } from '../actions/index';
import { CountryListItem } from '../components/country_list_item';
import { State } from '../interfaces';

class CountryList extends React.Component<any, any> {

    static ascendingOrder = 'asc';
    static descendingOrder = 'desc';

    constructor(props: any) {
        super(props);
        this.handleThClick = this.handleThClick.bind(this);
    }

    handleSorting(thElement: JQuery<any>, sortingType: string) {
        RemoveSortingStyle();
        thElement.addClass(sortingType);
        this.props.sortBy(thElement.text().toLowerCase(), sortingType);
    }

    handleThClick(event: any) {
        let thTarget = $(event.target);

        if (thTarget.hasClass(CountryList.ascendingOrder)) {
            this.handleSorting(thTarget, CountryList.descendingOrder);
        } else {
            this.handleSorting(thTarget, CountryList.ascendingOrder);
        }
    }

    render() {
        if (this.props.countries.length === 0) {
            return null;
        }

        return (
            <table className="table table-hover mt-4">
                <thead>
                    <tr>
                        <th className="sortable" onClick={this.handleThClick}>Name</th>
                        <th className="sortable" onClick={this.handleThClick}>Population</th>
                        <th className="sortable" onClick={this.handleThClick}>Area</th>
                        <th className="sortable" onClick={this.handleThClick}>Capital</th>
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

const mapDispatchToProps = (dispatch: any) => bindActionCreators({sortBy}, dispatch);

const CountryListContainer = connect(mapStateToProps, mapDispatchToProps)(CountryList);

export default CountryListContainer;

export function RemoveSortingStyle() {
    let thList = $('th');
    thList.removeClass(CountryList.ascendingOrder);
    thList.removeClass(CountryList.descendingOrder);
}