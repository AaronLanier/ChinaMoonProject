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
                    <div class="form-group">
                        <label for="email">UserID:</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
    </div>
                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
    </div>
                            
                                <button type="submit" className="btn btn-primary"id="submit" >Submit</button>
  </form>
                        </div>

        );
    }
}

export default Login;