import React from 'react';
import Product from "./content/Product";
import {Link} from "react-router-dom";

const ProductPage = ({match}) => {
    console.log(match)
    return (
        <div>
            Taki produkt
            <Product name={match.params.name}/>
        <Link to="/products">Powrót</Link>
        </div>
    );
};

export default ProductPage;