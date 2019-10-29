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
    handleMenuTypeChange=(e)=>{
        this.setState({menuType:e.target.value},()=>{
            console.log("Filter by",this.state.menuType)
            axios.get("/menus/"+this.state.menuType)
            .then((menus) => {
                console.log(menus);
                this.setState({menus:menus.data.data})
            }).catch(err =>{
                console.log(err)
            })
            
        })

    }

    render() {
        return (
            <div>
            <h1>This is my homepage!</h1>
            <select name = "menuType" value={this.state.menuType} onChange={this.handleMenuTypeChange}>
          <option value="all">---</option>
          <option value="All Day Menu">All Day Menu</option>
          <option value="Lunch Specials">Lunch Specials</option>
          <option value="Family Dinners">Family Dinners</option>
        </select>
                {this.state.menus.map((menu) => (
                    <>
                    
                    <p>Catagory Name: {menu.categoryName}</p>
                    <p>Item Name:{menu.itemName}</p>
                    <p>Price:{menu.price}</p>
                    </>
                ))}
            </div>
        );
    }
}
  


export default Home;