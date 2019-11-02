import React, { Component } from 'react';
import axios from 'axios';
import Map from '../Map/Map'
// import "../Home.css";

class Home extends Component {
    state = {
        menus: []
    }

    componentDidMount() {
        this.getMenus();
    }

    getMenus = () => {
        axios.get("/menus")
            .then((menus) => {
                console.log(menus);
                this.setState({ menus: menus.data.data })
            }).catch(err => {
                console.log(err)
            })
    }
    handleMenuTypeChange = (e) => {
        this.setState({ menuType: e.target.value }, () => {
            console.log("Filter by", this.state.menuType)
            axios.get("/menus/" + this.state.menuType)
                .then((menus) => {
                    console.log(menus);
                    this.setState({ menus: menus.data.data })
                }).catch(err => {
                    console.log(err)
                })

        })

    }

    render() {
        return (
            <div className="row">
                <div className="col-sm" id="menuContainer">
                    <select name="menuType" id="dropdown" value={this.state.menuType} onChange={this.handleMenuTypeChange}>
                        <option value="all" id="dropdown-content">---</option>
                        <option value="All Day Menu" id="dropdown-content">All Day Menu</option>
                        <option value="Lunch Special" id="dropdown-content">Lunch Special</option>
                        <option value="Family Dinner" id="dropdown-content">Family Dinner</option>
                    </select>
                    {this.state.menus.map((menu) => (
                        <>

                            {/* <p>Catagory Name: {menu.categoryName}</p> */}
                            <p id="itemName">{menu.itemName} - ${menu.price} </p>
                            {/* <p id="price">Price: {menu.price}</p> */}
                            {/* ----------------------------------------- */}
                        </>
                    ))}
                </div>
                <div className="col-sm" id="map"><Map /></div>
            </div>
        );
    }
}



export default Home;