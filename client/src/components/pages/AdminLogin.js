

// export default AdminLogin;
import React, { Component } from "react";
import "../styles.css";
import axios from "axios";
class Login extends Component {
 constructor(props) {
   super(props);
   this.state = {
     username: "",
     password: ""
   };
   //console.log(props);
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
   console.log(this.state);
   event.preventDefault();
   axios
     .post("/api/auth", this.state)
     .then(response => {
       console.log(response);
       if (response.data.error === false) {
         //this.props.setIsAuthed(true);
         this.props.history.push("/AdminHome");
       } else {
         alert("There was a problem!");
       }
     })
     .catch(err => {
       console.log(err);
       alert("There was a problem!");
     });
 };

 render() {
   return (
     <div className="row" id="main-row">
     <div className="login">
       <h4 id="lgn">Admin Login</h4>
       <form>
         <div className="form-group">
           <label htmlFor="username">UserID:</label>
           <input
             type="text"
             placeholder="Enter Email"
             onChange={this.handleChange}
             id="username"
             name="username"
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
     </div>
   );
 }
}
export default Login;