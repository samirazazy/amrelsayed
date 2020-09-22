import React, {useState} from 'react';
import greenTshirt from '../images/greenTshirt.jpg';
import mobacoTshirt from '../images/MobacoTshirt.jpg';
import terranovaTshirt from '../images/TerranovaTshirt.jpg';
import terranovaTshirt2 from '../images/TerranovaTshirt2.jpg';
import {connect} from 'react-redux';
import {addBasket} from '../actions/addAction';

const Home = (props) => {
  console.log(props);

    return(
        <div className="container" >
            <div className="image" >
                <img className="imagleFile" src={greenTshirt} alt="Green T-Shirt" />
                <h3>Grey T-shirt</h3>
                <h3>$15.00</h3>
                <a onClick={() => props.addBasket('greenTshirt')} className="addToCart cart1" href="#">Add to Cart</a>
            </div>
            <div className="image" >
                <img className="imagleFile" src={mobacoTshirt} alt="Mobaco T-shirt" />
                <h3>Mobaco T-shirt</h3>
                <h3>$10.00</h3>
                <a onClick={() => props.addBasket('mobacoTshirt')}  className="addToCart cart2" href="#">Add to Cart</a>
            </div>
            <div className="image" >
                <img className="imagleFile" src={terranovaTshirt} alt="Terranova black T-shirt" />
                <h3>Terranova black T-shirt</h3>
                <h3>$25.00</h3>
                <a onClick={() => props.addBasket('terranovablackTshirt')}  className="addToCart cart3" href="#">Add to Cart</a>
            </div>
            <div className="image" >
                <img className="imagleFile" src={terranovaTshirt2} alt="Terranova green T-shirt" />
                <h3>Terranova green T-shirt</h3>
                <h3>$30.00</h3>
                <a onClick={() => props.addBasket('TerranovagreenTshirt')}  className="addToCart cart4" href="#">Add to Cart</a>
            </div>
    
        </div>
    );
}


export default connect(null , { addBasket })(Home);