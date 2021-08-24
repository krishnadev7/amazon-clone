import React from 'react'
import  './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image'
                 src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/unrec1499/Under1499_Gw_3000x1200._CB661592357_.jpg" alt=""  />

                    <div className="home__row">
                        <Product 
                        id='1'
                        title='Ikigai: The Japanese secret to a long and happy life'
                        price={317}
                        image='https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg'
                        rating={5}
                        />
                        <Product
                        id='2'
                        title='Oculus Quest All-in-one VR Gaming Headset – 64GB'
                        price={48990}
                        image="https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US327_FMwebp_QL65_.jpg"
                        rating={2}
                        />
                        
                    </div>
                    
                    <div className="home__row">
                    <Product 
                        id='3'
                        title='Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)'
                        price={33998}
                        image='https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B5ECC8E3DA42415._V531815325_.jpg'
                        rating={3}
                        />
                    <Product
                    id='4'
                    title='Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1-inch AMOLED Color Display, Magnetic Charging, 2 Weeks Battery Life, Personal Activity Intelligence (PAI), Women’s Health Tracking'
                    price={2499}
                    image="https://m.media-amazon.com/images/I/719ZywAmvOL._SY450_.jpg"
                    rating={4}
                    />
                    <Product
                    id='5'
                    title='OnePlus Nord 2 5G (Gray Sierra, 8GB RAM, 128GB Storage'
                    price={29999}
                    image='	https://m.media-amazon.com/images/I/71KVeQql77S._SX679_.jpg'
                    rating={2}
                    />
                    </div>

                    
                    <div className="home__row">
                    <Product
                    id='6'
                    title='OnePlus 163.8 cm (65 inches) U Series 4K LED Smart Android TV 65U1S (Black) (2021 Model)'
                    price={68999}
                    image='https://m.media-amazon.com/images/I/71jv5i4cRKS._AC_UY218_.jpg'
                    rating={5}
                    />
                    </div>

            </div>
        </div>
    )
}

export default Home
