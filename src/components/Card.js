import { Button } from "@material-ui/core";
import React from "react";
import { useStateValue } from '../StateProvider'
import "./Card.css";

function Card({ id, src, title, price }) {

    const [state, dispatch] = useStateValue()
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id:id,
                title: title,
                price: +price,
                src: src
            }
        })
    }
    return (
        <div className="card">
            <div className="card__info">
                <h4>{title}</h4>
                <h3>₹{price}</h3>
            </div>
            <img src={src} alt="" />
            <Button onClick={addToBasket} className="basket__Button">Add to Basket</Button>
        </div>
    );
}

export default Card;


