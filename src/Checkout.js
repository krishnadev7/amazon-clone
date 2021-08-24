import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'


function Checkout() {
    const [{ basket, user },dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/MSD_Aug/iQOO/WLD_iQOO_ILM---Design-SIM_ILM_PC_640x45_1._CB644551148_.jpg" alt=""  />
            

            <div className="checkout__title">
                <h3>Hello, {user?.email}</h3>
                <h2>Your Shopping Cart</h2>
                    {basket.map((item) => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        rating={item.rating}
                        price={item.price}
                        />
                    ))}
            </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>

        </div>
    )
}

export default Checkout
