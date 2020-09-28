import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'


function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                value={500.55}
                decimalScale={2}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
                renderText={(value) =>
                    <div>
                        <p>Subtotal(0 items):<strong>{value}</strong> </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>
                            This order contain a gift
                        </small>
                    </div>} />
            <button className="checkout__btn">Procees to checkout</button>
        </div>
    )
}

export default Subtotal
