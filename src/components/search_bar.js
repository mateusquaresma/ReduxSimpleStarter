import React, { Component } from 'react';
// Syntax sugar, same as the line above, const Component = React.Component

// const SearchBar = () => {
//   return <input />
// };

class SearchBar extends Component {

  // default method to render a react component
  render() {
    return <input onChange = {event => console.log(event.target.value)} />
  }


}

export default SearchBar;
