import React from 'react';
import client from '../api/client';
import SearchBar from './SearchBar';

class App extends React.Component {

  state = {images: []}
  
   onSearchSubmit = async (term) => {
    const response = await client.get('/search/photos', {
      params: { query: term },
    });

    this.setState({images: response.data.results})
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmitCallback={this.onSearchSubmit} />
        Found:{this.state.images.length} images
      </div>
    );
  }
}

export default App;
