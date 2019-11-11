import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const brands = ["Almay","Alva","Anna sui","Annabelle","Benefit","Boosh","Burt's bees","Butter london","C'est moi","Cargo cosmetics","China glaze","Clinique","Coastal classic creation","Colourpop","Covergirl","Dalish","Deciem","Dior","Dr. hauschka","e.l.f.","Essie","Fenty","Glossier","Green people","Iman","L'oreal","Lotus cosmetics usa","Maia's mineral galaxy","Marcelle","Marienatie","Maybelline","Milani","Mineral fusion","Misa","Mistura","Moov","Nudus","Nyx","Orly","Pacifica","Penny lane organics","Physicians formula","Piggy paint","Pure anada","Rejuva minerals","Revlon","Sally b's skin yummies","Salon perfect","Sante","Sinful colours","Smashbox","Stila","Suncoat","W3llpeople","Wet n wild","Zorah","Zorah biocosmetiques"];

class ListView extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      search   : "",    // Search term (Will be searched in product.name)
      brand    : "",    // Selected brand
      results  : [],    // All results (not filtered by search)
      filtered : [],    // Filtered results (after search)
      product  : null,  // Selected product for detail view
      loading  : false  // Loading state
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
  }

  render () {

    if (window.state) { // Recover ListView state, TODO: Inter-Component-Communication?!
      Object.assign(this.state, {
        brand: window.state.brand,
        search: window.state.search,
        results: window.state.results,
        filtered: window.state.filtered
      });
      delete window.state;
    }

    var productRows = this.state.filtered.map(
      product => 
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.price} €</td>
          <td><Link to={`/product/${product.id}`} onClick={this.handleDetail}>Details</Link></td>
        </tr>
    );

    var productTable = 
      <table>
         <thead>
          <tr>
            <th>Product name</th>
            <th>Price</th>
            <th></th>
          </tr>
         </thead>
         <tbody>
           {productRows}
         </tbody>
      </table>;

    if (this.state.filtered.length === 0) {
      productTable = <table><tbody><tr><td>No products to be displayed.</td></tr></tbody></table>
    }

    return (
      <div className="list-view-container">
        <img src="/cosnova-logo.svg" className="cosnova-logo" alt="Cosnova"/>
        <div className="list-view-filters">
          <select onChange={this.handleFilter} value={this.state.brand}>
            <option value="">-- Choose brand --</option>
            { brands.map(brand => <option key={brand} value={brand}>{brand}</option>) }
          </select>
          <input className="search-input" onChange={this.handleSearch} defaultValue={this.state.search} type="text" placeholder="Search"/>
        </div>
        <div className="list-view-results">
          { this.state.loading ? <div className="spinner"></div> : productTable }
        </div>
      </div>
    );
  }

  handleSearch (e) {
    var value = e.target.value.toLowerCase();
    if (value !== "") {
      var filtered = this.state.results.filter(
        product => product.name.toLowerCase().indexOf(value) !== -1);
      this.setState({ filtered: filtered, search: value });  
    } else {
      this.setState({ filtered: this.state.results, search: value });  
    }
  }

  handleFilter (e) {
    var value = e.target.value, _this = this;
    var url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${value}`;
    this.setState({ loading: true, brand: value });
    axios
      .get(url)    
      .then(res => {
        _this.setState({
          results  : res.data,
          filtered : res.data,
          search   : "",
          loading  : false
        });
      });
  }

  handleDetail (e) {
    window.state = this.state;  // TODO: Find better way to communicate between components :(
  }

}

export default ListView;
