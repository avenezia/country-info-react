import * as React from 'react';
import './App.css';
import SearchBarContainer from  './containers/search_bar';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <SearchBarContainer />
      </div>
    );
  }
}

export default App;
