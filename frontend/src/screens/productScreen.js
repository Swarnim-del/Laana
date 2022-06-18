/*/eslint-env es6/S */
/*global require*/

import React from "react";
import data from "../components/data";
import Rating from "../components/rating";

export default function productScreen(props) {
  // const product = (props) => {
    
  // };
  const product = data.products.find(
    (x) => Number(x._id) === Number(props.match.params.id)
  );
  if (!product) {
    return <div>product not found! </div>;
  }
  
  return (
    <div>
      {/* product page is found */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">SKU: BST-498</div>
              <h1 className="display-5 fw-bolder">{product.name}</h1>
              <div className="fs-5 mb-5">
                
                <span>Price: ${product.price}</span>
              </div>
              <p className="lead">{product.description}</p>
              <div className="d-flex">
                {/* <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  value="1"
                /> */}
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </button>
              </div>
              <Rating rating={product.rating} numReviews={product.numReviews} />
              <div className="status">
                {product.countDown>0?(<span className="success">InStock</span>):(<span className="danger">Unavailaible</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
