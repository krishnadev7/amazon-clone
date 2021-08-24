import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'



function Product({id,title,price,rating,image}) {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:id,
                image:image,
                title:title,
                price:price,
                rating:rating,
            },
        })
    }

    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                   {Array(rating).fill().map((index) => (
                       <p>⭐</p>
                 ))} 
                </div>
            </div>
         <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
