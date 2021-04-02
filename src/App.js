import React, { Component } from "react";
import Navbar from "./component/Navbar";
import ProductCard from "./component/Productcard";
class App extends Component {
  state = {
    products: [],
  };
  // {
  //   "userId": 1,
  //   "id": 1,
  //   "title": "delectus aut autem",
  //   "completed": false
  // }
  //   category: "men clothing"
  // description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
  // id: 1
  // image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  // price: 109.95
  // title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"

  constructor() {
    super();
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({ products: result });
        },
        (error) => {}
      );
  }
  render() {
    let cntr = 0;
    return (
      <React.Fragment>
        <div>
          <Navbar title={"Parag"} />
          <div className="row">
            {this.state.products.length > 0
              ? this.state.products.map((ele, index) => {
                  return (
                    <div className="col-sm-4">
                      <ProductCard
                        userId={ele.userId}
                        id={ele.id}
                        title={ele.title}
                        completed={ele.completed}
                      />
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
