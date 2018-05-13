import * as React from 'react';
import './App.css';
import CountryListContainer from './containers/country_list';
import SearchBarContainer from  './containers/search_bar';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <SearchBarContainer />
        <CountryListContainer />
      </div>
    );
  }
}

export default App;
