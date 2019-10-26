import React, { Component } from 'react';

class Registration extends Component {
    state = {
        Name:"",
        User: "",
        password: ""
    }

    render() {
        return (

            <div className="login" >
                <h4 id="lgn">Admin Registration</h4>
                <form action="/action_page.php" >
                    <div className="form-group">
                        <label hmtlFor="email">Name:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Full Name" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmFor="email">UserID:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Confirm Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Re-Enter password" name="pswd" />
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" name="remember" /> Remember me
      </label>
                    </div>
                    <button type="submit" className="btn btn-primary" id="submit" >Submit</button>
                </form>
            </div>

        );
    }
}

export default Registration;