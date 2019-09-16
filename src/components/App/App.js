import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

/*const business = {
  imageSrc: 'https://images.squarespace-cdn.com/content/54e78c74e4b0a4a2246be378/1428567650776-7OZ700XVS48FM0YAP64I/Reggae_Grill_Logo_4C+rectangular.png?content-type=image%2Fpng',
  name: 'Jamaican Reggae Grill',
  address: '622 S. Rangeline Rd',
  city: 'Carmel',
  state: 'IN',
  zipCode: '46032',
  category: 'Jamaican',
  rating: 4.5,
  reviewCount: 112
}

const businesses = [
  business, 
  business, 
  business, 
  business, 
  business, 
  business
]; */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    // console.log(`Searching Yelp for ${term}, ${location}, Sort By: ${sortBy}`);
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses})
    });
  }

  render() {
    return (
      <div className="App">
        <h1>HakList</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;