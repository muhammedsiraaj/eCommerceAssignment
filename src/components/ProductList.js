import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const ProductList = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-3 mt-5" id='card'  key={product.id}>
          <div className="card h-100">
            <img src={product.image} alt={product.title} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price}</p>
              <Link to={`/product/${product.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
