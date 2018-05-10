import * as React from 'react';
import './App.css';
import SearchBar from  './containers/search_bar';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
