import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../components/HomePage"
import Products from "../components/Products"
import Contact from "../components/Contact"
import Admin from "../components/Admin"
import ErrorPage from "../components/ErrorPage";

const Page = () => {

    return (
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/products" exact component={Products}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/admin" exact component={Admin}/>
            <Route component={ErrorPage}/>
        </Switch>
    );
};

export default Page;