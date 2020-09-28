import { Button } from "@material-ui/core";
import React from "react";
import "./Card.css";

function Card({ src, title, price }) {
    return (
        <div className="card">
            <div className="card__info">
                <h4>{title}</h4>
                <h3>₹{price}</h3>
            </div>
            <img src={src} alt="" />
            <Button className="basket__Button">Add to Basket</Button>
        </div>
    );
}

export default Card;


