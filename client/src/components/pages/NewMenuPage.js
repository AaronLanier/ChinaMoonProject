import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class NewCar extends Component {
  state = {
    catagoryName: "",
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
        if(response.data.error){
          alert("Failed to create" + response.data.message);
        }else{
          this.props.history.push('/AdminHome');
        } 
      })
      .catch(err => {
        console.log(err);
        alert("Failed to create: " + err.message);
      });
  };

  render() {
    return (
      <div>
        <h1>This is my new menu</h1>
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Catagory Name"
              onChange={this.handleChange}
              name="catagoryName"
              value={this.state.catagoryName}
            />
          </div>
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

export default NewCar;
