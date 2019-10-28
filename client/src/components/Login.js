import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    user_id: "",
    password: ""
  };

  handleInputChange = event => {
    console.log(event.target.value);
    let value = event.target.value;
    let name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  // handleInputChange = event => {
  //     console.log(event.target.value);
  //     console.log(e.target.user_id);
  //     const  UserID= event.target.user_id;
  //     const Pwd = event.target.password;
  //     //const { name, value } = event.target;
  //     this.setState({
  //         user_id=this.state.UserID,
  //         password=this.state.Pwd

  //     });
  // };

  handleFormSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    axios
      .post("/api/admin/user_id", this.state)
      .then(response => {
        console.log(response);
        if (response.data.error) {
          alert("Action Failed " + response.data.message);
        } else {
          //if user id and password exit
          //re-direct to admin page
          // this.props.history.push('/collection/' + response.data.data._id);
        }
      })
      .catch(err => {
        console.log(err);
        alert("Failed to create: " + err.message);
      });
  };

  render() {
    return (
      <div className="login">
        <h4 id="lgn">Admin Login</h4>
        <form>
          <div className="form-group">
            <label htmlFor="email">UserID:</label>
            <input
              type="email"
              onChange={this.handleInputChange}
              className="form-control"
              id="user_id"
              placeholder="Enter email"
              name="user_id"
              value={this.state.user_id}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              onChange={this.handleInputChange}
              className="form-control"
              id="password"
              placeholder="Enter password"
              name="password"
              value={this.state.password}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            id="submit"
            onClick={this.handleFormSubmit}
          >
            Submit
          </button>
        </form>

        <br />

        <br />

        <br />
      </div>
    );
  }
}

export default Login;
