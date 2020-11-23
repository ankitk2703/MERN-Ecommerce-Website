import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from '../components/CheckoutProduct'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="amazon_ad"></img>

                <div className="checkout__title">
                    Your Shopping basket
                </div>

                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    src={item.src}
                    price={item.price}
                    title={item.title}
                    />
                ))}
                {/* { Checkout basket} */}
                {/* { Checkout basket} */}
                {/* { Checkout basket} */}
                {/* { Checkout basket} */}

            </div>

            <div className="checkout__right">
               <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
