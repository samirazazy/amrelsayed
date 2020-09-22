import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {productQuantity, clearProduct} from '../actions/productQuantity';
import { Link } from 'react-router-dom';

import greenTshirt from '../images/greenTshirt.jpg';
import mobacoTshirt from '../images/MobacoTshirt.jpg';
import terranovaTshirt from '../images/TerranovaTshirt.jpg';
import terranovaTshirt2 from '../images/TerranovaTshirt2.jpg';

function Cart({basketProps, productQuantity, clearProduct}) {
    console.log(basketProps);

    let productsInCart = [];

    Object.keys(basketProps.products).forEach(function(item){
        console.log(item);
        console.log(basketProps.products[item].inCart)
        if(basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
    })

    /* const productImages = [greenTshirt,mobacoTshirt ,terranovaTshirt,terranovaTshirt2] */
    const productImages = (product) => {

        if(product.tagName === 'greenTshirt' ) {
            return greenTshirt
        } else if (product.tagName === 'mobacoTshirt') {
            return mobacoTshirt
        } else if (product.tagName === 'terranovablackTshirt') {
            return terranovaTshirt
        } else if (product.tagName === 'TerranovagreenTshirt') {
            return terranovaTshirt2
        }
    }
    
    productsInCart = productsInCart.map( (product, index) => {
        console.log('My Product is');
        console.log(product);
        return (
            <Fragment key={index}>
                <div className="product"> <ion-icon onClick={() => clearProduct(product.tagName)} name="close-circle"></ion-icon> <img src={productImages(product)} />
                    <span className="price sm-hide">{product.name}</span>
                </div>
                <div className="quantity">
                    <ion-icon onClick={() => productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                    <span>{product.numbers}</span>
                    <ion-icon onClick={() => productQuantity('increase', product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="total">${product.numbers * product.price},00</div>
            </Fragment>
        )
    });

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="price sm-hide ">PRICE</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">
                { productsInCart }
            </div>
            <div className="basketTotalContainer">
            <ion-icon name="arrow-back-outline"></ion-icon> <Link to="/"> <h4 className="backToShopping">Continue Shopping</h4> </Link>
                <h4 className="basketTotalTitle">Basket Total</h4>
                <h4 className="basketTotal">{basketProps.cartCost},00</h4>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps, {productQuantity, clearProduct})(Cart);
