import React, { Component } from "react";
import axios from "axios";

class NewMenuPage extends Component {
  state = {
    menuType: "All Day Menu",
    categoryName: "",
    itemName: "",
    price: ""
  };

  handleChange = event => {
    let value = event.target.value;
    let name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    axios
      .post("/new", this.state)
      .then(response => {
        console.log(response);
        if (response.data.error) {
          alert("Failed to create" + response.data.message);
        } else {
          this.props.history.push("/AdminHome");
        }
      })
      .catch(err => {
        console.log(err);
        alert("Failed to create: " + err.message);
      });
  };

  handleMenuTypeChange = e => {
    console.log("what we choose ", e.target.value);
    this.setState({ menuType: e.target.value });
  };
  handleCategoryNameChange = e => {
    this.setState({ categoryName: e.target.value });
  };

  render() {
    return (
      <div className="jumbotron">
        <div className="row">
          <div className="col">
            <h1>ADD A MENU HERE</h1>
            <select
              name="menuType"
              value={this.state.menuType}
              onChange={this.handleMenuTypeChange}
            >
               <option value="All Day Menu" id="dropdown-content">
              All Day Menu
            </option>
            <option value="Lunch Special" id="dropdown-content">
              Lunch Special
            </option>
            <option value="Family Dinner" id="dropdown-content">
              Family Dinner
            </option>
            </select>
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            <select
              name="categoryName"
              value={this.state.categoryName}
              onChange={this.handleCategoryNameChange}
            >
              <option value="appetizers">Appetizers</option>
              <option value="chicken">Chicken</option>
              <option value="beef">Beef</option>
            <option value="seafood">Sea Food</option>
            <option value="pork">Pork</option>
            <option value="vegetables">Vegetables</option>
            <option value="loMein">Lo Mein</option>
            <option value="houseSpecial">House Special</option>
            <option value="chowMein">Chow Mein</option>
            <option value="eggFuYungandFriedRice">
              Egg FU Yung and Fried Rice
            </option>
            <option value="comboDinner">Combination Dinner</option>
            <option value="kidMenu">Kid's Menu</option>
              <option value="lunch">Lunch</option>
              <option value="famDin">Family Dinner</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Item Name"
                  onChange={this.handleChange}
                  name="itemName"
                  value={this.state.itemName}
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="price"
                  onChange={this.handleChange}
                  name="price"
                  value={this.state.price}
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewMenuPage;
