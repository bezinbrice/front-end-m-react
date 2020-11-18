import React from 'react';
import './Product.css'

const Product = props => {
    return (
        <div className="product" >
            <img src={props.url} alt="produit" />
            <p className="product__name" >Name</p>
            <p className="product__price" >109 €</p>
        </div>

    )
    
}

export default Product;
