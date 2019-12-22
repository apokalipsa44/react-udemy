import React from 'react';
import {Link} from "react-router-dom";

const products=["muffler", "engine", "spoilers"]

const Products = () => {
    const productsList=products.map(product=>(
        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ))
    return (
        <div className="products">
            <div>Products list</div>
            {productsList }
        </div>
    );
};
export default Products;