import React, { Component } from "react";
//import axios from "axios";

class Login extends Component {
  state = {
    userid: "",
    password: ""
  };

  handleChange = event => {
    let value = event.target.value;
    let name = event.target.name;

    this.setState({
      [name]: value
    });
    //console.log(this.state);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    // axios
    //   .post("/api/admin/user_id", this.state)
    //   .then(response => {
    //     console.log(response);
    //     if (response.data.error) {
    //       alert("Action Failed " + response.data.message);
    //     } else {
    //       //if user id and password exit
    //       //re-direct to admin page
    //       // this.props.history.push('/collection/' + response.data.data._id);
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     alert("Failed to create: " + err.message);
    //   });
  };

  render() {
    return (
      <div className="login">
        <h4 id="lgn">Admin Login</h4>
        <form>
          <div className="form-group">
            <label htmlFor="userid">UserID:</label>
            <input
              type="text"
              placeholder="Enter Email"
              onChange={this.handleChange}
              id="userid"
              name="userid"
              value={this.state.userid}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              onChange={this.handleChange}
              type="password"
              id="pwd"
              placeholder="Enter password"
              name="password"
              value={this.state.value}
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
