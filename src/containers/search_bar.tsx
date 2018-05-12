import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addCountry } from '../actions/index';

class SearchBar extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {searchTerm: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(event: any) {
        this.setState({searchTerm: event.target.value});
    }

    onSubmit(event: any) {
        event.preventDefault();
        this.props.addCountry(this.state.searchTerm);
        this.setState({searchTerm: ''});
    }

    render() {
        return (
            <div className="container">
                <form className="input-group mt-2" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="form-control mr-2"
                        value={this.state.searchTerm}
                        onChange={this.onInputChange}
                    />
                    <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Add country</button>
                    </span>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({addCountry}, dispatch);
}

const SearchBarContainer = connect(null, mapDispatchToProps)(SearchBar);

export default SearchBarContainer;