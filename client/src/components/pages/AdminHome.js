import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../AdminHome.css";

class AdminHome extends Component {
  state = {
    menus: [],
    showNewItemForm: false

  };


  componentDidMount() {
    this.getMenus();
  }

  getMenus = () => {
    axios
      .get("/menus")
      .then(menus => {
        console.log(menus);
        this.setState({ menus: menus.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  deleteMenuById = id => {
    let shouldDelete = window.confirm(
      `Are you sure you want to delete this item? ${id}`
    );
    if (shouldDelete === true) {
      axios
        .delete(`/menus/${id}`)
        .then(response => {
          console.log(response);
          alert("Your menu was successfully deleted.");
          window.location.reload();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div className="container" id="adminTable">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Menu Type</th>
              <th scope="col">Catagory Name</th>
              <th scope="col">Item Name</th>
              <th scope="col">Price</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {this.state.menus.map(menu => (
              <tr>
                <td>{menu.menuType}</td>
                <td>{menu.categoryName}</td>
                <td>{menu.itemName}</td>
                <td>{menu.price}</td>
                <td>   <Link to={"/edit/" + menu._id}>
                  <button className="btn btn-info" id="editButton">Edit</button>
                </Link><button type="button" id="deleteButton" className="btn btn-danger" value={menu._id} onClick={() => this.deleteMenuById(menu._id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.state.showAccidentForm ? (
          <div className="row">
            <form>

              <div className="form-group">

                <input
                  type="text"
                  name="cost"
                  value={this.state.cost}
                  onChange={this.handleCostChange}
                />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-success"
                  onClick={this.handleAccidentFormSubmit}
                >
                  Submit Your New Item
                </button>
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => {
                    this.setState({ showNewItemForm: false });
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
            <Link to={"/NewMenuPage"}>
              <button type="button" className="btn btn-success">New Item</button>
            </Link>

          )}
      </div>
    );
  }
}

export default AdminHome;
