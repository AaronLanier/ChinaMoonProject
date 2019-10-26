import React, { Component } from "react";
import axios from "axios";

class Edit extends Component {
  state = {
    catagoryName: "",
    itemName: "",
    price: "",
    _id:""
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.getCarById();
  }

  getCarById = () => {
    axios
      .get("/menus/" + this.props.match.params.id)
      .then(menu => {
        console.log(menu);
        this.setState({
          catagoryName: menu.data.data.model,
          itemName: menu.data.data.color,
          price: menu.data.data.year,
          _id: menu.data.data._id
        
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleInputChange = event => {
    //   const name = event.target.name;
    //   const value = event.target.value;
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .put(`/menu/${this.state._id}`, this.state)
      .then(response => {
        console.log(response);
        if (response.data.error) {
          alert("Failed to create" + response.data.message);
        } else {
          this.props.history.push("/collection/" + response.data.data._id);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>This is the edit page</h1>
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <form>
              <div className="form-group">
                <label htmlFor="model">Catagory Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="model"
                  placeholder="Item Catagory"
                  value={this.state.catagoryName}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="color">Item Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="color"
                  placeholder="Item Name"
                  value={this.state.color}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="year">Price</label>
                <input
                  className="form-control"
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={this.state.year}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary" onClick={this.handleSubmit}>
                  Submit Changes
                </button>
              </div>
            </form>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    );
  }
}

export default Edit;
