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

  handleMenuTypeChange =(e)=> {
      console.log("what we choose ",e.target.value);
      this.setState({menuType:e.target.value})
  }
  handleCategoryNameChange =(e)=>{

    this.setState({categoryName:e.target.value})
  }

  render() {
    return (
      <div>
        <h1>This is my new menu</h1>
        <select name = "menuType" value={this.state.menuType} onChange={this.handleMenuTypeChange}>
          <option value="All Day Menu">All Day Menu</option>
          <option value="Lunch Specials">Lunch Specials</option>
          <option value="Family Dinners">Family Dinners</option>
        </select>
        <select name = "categoryName" value={this.state.categoryName} onChange={this.handleCategoryNameChange}>
          <option value="Appetizers">Appetizers</option>
          <option value="Chicken">Chicken</option>
          <option value="Beef">Beef</option>
          <option value="Sea Food">Sea Food</option>
          <option value="Pork">Pork</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Lo Mein">Lo Mein</option>
          <option value="House Special">House Special</option>
          <option value="Chow Mein">Chow Mein</option>
          <option value="Egg FU Yung and Fried Rice">Egg FU Yung and Fried Rice</option>
          <option value="Combination Dinner">Combination Dinner</option>
          <option value="Kid's Menu">Kid's Menu</option>
        </select>
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
    );
  }
}

export default NewMenuPage;
