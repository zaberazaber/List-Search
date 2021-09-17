import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault(); //we do this to prevent the default behaviour on form submition on enter
    this.props.onSubmitCallback(this.state.term) // calling the call back
    // console.log(this.state.term); // this will also throw an error cannot read state of undefined. to resolve this error we have to bind the function or we have to make this function an arrow function
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
