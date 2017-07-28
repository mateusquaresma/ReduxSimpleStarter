import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyBBS3IMUphrWHY4ofFC_f1O7OiULclTbHc";

// Create a new component. This component should produce   some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
