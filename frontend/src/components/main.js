import Rating from "./rating";
import React, { useEffect} from "react";

import MessageBox from './messagebox';
import Loadingbox from './loadingbox';
import {useSelector,useDispatch} from 'react-redux';
import {listProducts} from '../actions/productActions'

export default function main() {
  const dispatch= useDispatch();
  const productList =useSelector((state)=>state.productList);
  const {loading,error,products}=productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loadingbox></Loadingbox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <section className="main">
          <div className="row-center">
            {products.map((product) => (
              <div key={product._id} className="item">
                <a href={`/product/${product._id}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="item-body">
                  <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                  <div className="price">${product.price}</div>
                </div>
              </div>
            ))}
          </div>
          
        </section>
      )}
    </div>
  );
}
