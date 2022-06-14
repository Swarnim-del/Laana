import React, { Component } from 'react'
import data from './data'
export default class main extends Component {
  render() {
    return (
      <div>
        <section className="main">

      <div className="row-center">
          {
            data.products.map(product=>(
              <div key={product._id} className="item">
              <a href={`/product/${product._id}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="item-body">
              <a href={`/product/${product._id}`}>
                  <h2>{product.name}</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">${product.price}</div>
              </div>
            </div>
            ))
          }

        <div className="item">
          <a href="product.html">
            <img src="/images/item1.jpg" alt="" />
          </a>
          <div className="item-body">
            <a href="product.html">
              <h2>Nike Sports Wear</h2>
            </a>
            <div className="rating">
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
            </div>
            <div className="price">$120</div>
          </div>
        </div>
        
      </div>
      {/* <!-- <div className="itme-content">
                <h2>Nike T Shirts</h2>
            </div> */}
    </section>
      </div>
    )
  }
}
