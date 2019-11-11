import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class DetailView extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      product: null, 
      loading: true
    }
  }

  componentDidMount () {
    var id = this.props.match.params.id;
    var url = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    var _this = this;
    axios.get(url).then(result => {
      console.log(result.data);
      _this.setState({ product: result.data, loading: false });
    });
  }

  render () {

    if (this.state.loading) {

      return (
        <div className="detail-view-container">
          <div className="spinner"></div>
        </div>
      );
      
    } else {

      var product = this.state.product;

      return (
        <div className="detail-view-container">
          <h2 className="product-name">{product.name}</h2>
          <img className="product-image" src={product.api_featured_image} alt={product.product_name}/>
          <p className="product-description">
            {product.description}
          </p>
          <p className="product-price">Price: <b>{product.price} €</b></p>
          <p className="product-rating">Rating: <b>{product.rating ? product.rating : 0}</b>/<b>5</b></p>
          <ul className="colors">
            { product.product_colors.map(color => {
              var style = { backgroundColor: color.hex_value };
              return <li key={`${color.hex_value}-${color.colour_name}`} style={style}></li>
            }) }
          </ul>
          <br/>
          <a href={product.product_link} target="_blank" rel="noopener noreferrer">Buy online</a>
          <br/>
          { window.state ? <Link to="/" className="back-link">Back</Link> : "" }
        </div>
      );

    }
  

  }

}

export default DetailView;
