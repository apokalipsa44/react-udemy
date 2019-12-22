import React from 'react';

const Product = (props) => {
    console.log(props)
    return (
        <div>
            <hr/>
         <h2>{props.name}</h2>
                <hr/>
        </div>
    );
};

export default Product;