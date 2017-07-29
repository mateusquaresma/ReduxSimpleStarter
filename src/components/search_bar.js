import React, { Component } from 'react';
// Syntax sugar, same as the line above, const Component = React.Component

// const SearchBar = () => {
//   return <input />
// };

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term : ""};
  }

  // default method to render a react component
  render() {
    return (
      <div>
        <input
          value = {this.state.term}
          onChange = {event => this.setState({term: event.target.value})} />
      
      </div>
    );
  }


}

export default SearchBar;
