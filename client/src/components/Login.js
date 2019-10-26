import React, { Component } from 'react';

class Login extends Component {
    state={
        User:"",
        password:""
    }

    render() {
        return (

            <div className="login" >
                <h4 id="lgn">Admin Login</h4>
                <form action="/action_page.php" >
                    <div className="form-group">
                        <label htmlFor="email">UserID:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
    </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
    </div>
                            
                                <button type="submit" className="btn btn-primary"id="submit" >Submit</button>
  </form>
                        </div>

        );
    }
}

export default Login;