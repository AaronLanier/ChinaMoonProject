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
      <>
      <Link to={"/AdminLogin"}>
              <button type="button" className="btn btn-warning" id="newButton" >Log Out</button>
            </Link>
      <div className="container" id="adminTable">
          <Link to={"/NewMenuPage"}>
              <button type="button" className="btn btn-success" id="newButton">New Item</button>
            </Link>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Menu Type</th>
              <th scope="col">Category Name</th>
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
        
      </div>
      </>
    );
  }
}

export default AdminHome;
