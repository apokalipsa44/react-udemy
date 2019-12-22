import React from 'react';
import {NavLink} from "react-router-dom";
import "../styles/Navigation.css"


const menuList = [
    {name: "home", path: "/"},
    {name: "products", path: "/products"},
    {name: "contact", path: "/contact"},
    {name: "admin", path: "/admin"}
]

const Navigation = () => {

    const menu = menuList.map(menu => (
        <li key={menu.name}>
            <NavLink to={menu.path} exact>{menu.name}</NavLink>
        </li>
    ))

    return (
        <div>
            <nav>
                <ul>
                    {menu}
                </ul>


            </nav>
        </div>
    );
};

export default Navigation;