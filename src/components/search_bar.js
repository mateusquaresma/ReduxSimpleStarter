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

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }

  // default method to render a react component
  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange = {event => this.onInputChange(event.target.value)} />
      </div>
    );
  }


}

export default SearchBar;
