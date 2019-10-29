import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';

class Registration extends Component {
//   state = {
//     name: "",
//       userid: "",
//       password: "",
//       confirmPswd:""
//   };

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            userid: "",
            password: "",
            confirmPswd: ""
        };
       
    }


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
        axios
            .post("/api/new", this.state)
            .then(response => {
                console.log(response);
                if (response.data.error) {
                    alert("Failed to create" + response.data.message);
                } else {
                    //this.props.history.push("/Login"); 
                    //browserHistory.push('/Login');
                    //this.history.pushState(null, 'Login');                   
                    //this.props.history.push('/collection/' + response.data.data._id);
                    return <Redirect to="/Login" />
                    
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
        <h4 id="lgn">Admin Registration</h4>
        <form >
          <div className="form-group">
            <label hmtlfor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={this.handleChange}
              placeholder="Enter Full Name"
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="userid">UserID:</label>
            <input
              type="email"
              className="form-control"
              onChange={this.handleChange}
              id="userid"
              placeholder="Enter email"
              name="userid"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
              placeholder="Enter password"
              name="password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confPwd">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              id="confPwd"
              onChange={this.handleChange}
              placeholder="Re-Enter password"
              name="confirmPswd"
            />
          </div>

          <button
            type="submit"
            onClick={this.handleFormSubmit}
            className="btn btn-primary"
            id="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Registration;
