import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
state={
    menus:[]
}

componentDidMount(){
    this.getMenus();
}

getMenus =() =>{
    axios.get("/menus")
    .then((menus) => {
        console.log(menus);
        this.setState({menus:menus.data.data})
    }).catch(err =>{
        console.log(err)
    })
    }
    render() {
        return (
            <div>
            <h1>This is my homepage!</h1>
                {this.state.menus.map((menu) => (
                    <>
                    <p>Catagory Name: {menu.catagoryName}</p>
                    <p>Item Name:{menu.itemName}</p>
                    <p>Price:{menu.price}</p>
                    </>
                ))}
            </div>
        );
    }
}
  


export default Home;