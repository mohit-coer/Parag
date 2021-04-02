import React, { Component } from "react";
// category: "men clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
// userId={ele.userId}
//                         id={ele.id}
//                         title={ele.title}
//                         completed={ele.completed}
const ProductCard = (props) => {
  const { userId, id, title, completed } = props;
  return (
    <React.Fragment>
      <div class="card" style={{ width: "18rem" }}>
        {/* <img src={image} class="card-img-top" alt="..." /> */}
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{completed}</p>
          <a href="#" class="btn btn-primary">
            Buy Now
          </a>
          <p class="card-text">Category:{userId}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCard;
