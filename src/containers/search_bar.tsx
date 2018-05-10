import * as React from 'react';

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
        console.log(this.state.searchTerm);
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

export default SearchBar;