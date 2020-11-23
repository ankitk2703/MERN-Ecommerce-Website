import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from '../StateProvider'


function CheckoutProduct({ id, title, price, src }) {

    const [{ basket }, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={src}></img>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct

