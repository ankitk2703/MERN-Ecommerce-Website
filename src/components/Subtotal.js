import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducer'
import {useHistory} from 'react-router-dom'

function Subtotal() {
    const history = useHistory()
    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) =>
                    <div>
                        <p>Subtotal({basket.length} items):<strong>{value}</strong> </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contain a gift
                        </small>
                    </div>}
                value={getBasketTotal(basket)}
                decimalScale={2}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'} />

            <button onClick={e => history.push('/payment')} className="checkout__btn">Procees to checkout</button>
        </div>
    )
}

export default Subtotal
