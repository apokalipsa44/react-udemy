import React from 'react';
import {Route, Switch} from 'react-router-dom'
import bmw1 from '../images/e361.jpg'
import bmw2 from '../images/e362.jpg'
import bmw3 from '../images/e363.jpg'
import bmw4 from '../images/e364.jpg'
import '../styles/Header.css'

const Header = () => {
    return (

        <Switch>
                <Route path="/" exact render={() => (
                    <img src={bmw1} alt="bmw"/>
                )}/>
                <Route path="/products" exact render={() => (
                    <img src={bmw2} alt="bmw"/>
                )}/>
                <Route path="/contact" exact render={() => (
                    <img src={bmw3} alt="bmw"/>
                )}/>
                <Route path="/admin" exact render={() => (
                    <img src={bmw4} alt="bmw"/>
                )}/>
                <Route render={()=>(
                    <img src={bmw4} alt="bmw"/>
                )}/>
        </Switch>
    );
};

export default Header;