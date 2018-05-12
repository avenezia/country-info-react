import * as React from 'react';
import './App.css';
import CountryList from './containers/country_list';
import SearchBarContainer from  './containers/search_bar';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <SearchBarContainer />
        <CountryList />
      </div>
    );
  }
}

export default App;
