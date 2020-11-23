import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from '../reducer'

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue()
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState(null)
    const [disable, setDisable] = useState(true)

    const handleSubmit = e => {

    }
    const handleChange = event => {
        setDisable(event.empty)
        setError(event.error ? event.error.message : "")
    }

    return (
        <div className="payment">
            <div className="payment__container">

                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>A-202 Shiv Parvati CHS</p>
                        <p>New Panvel, Mumbai</p>
                    </div>
                </div>


                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                src={item.src}
                                price={item.price}
                                title={item.title}
                            />
                        ))}
                    </div>
                </div>


                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    value={getBasketTotal(basket)}
                                    decimalScale={2}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'₹'} />
                            </div>
                        </form>

                      
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment
