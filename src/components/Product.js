import { Button } from '@material-ui/core'
import React from 'react'
import productCurtain from '../images/curtain.jpg'
import productCurtainTwo from '../images/curtaintwo.jpg'
import productLG from '../images/lg.jpg'
import productDoll from '../images/doll.jpg'
import productTrain from '../images/train.jpg'
import productPeppa from '../images/peppa.jpg'

import './Product.css'
import Card from './Card'


function Product() {
    return (
        <div className="product">
            <div className="product__rowOne">
                <Card id="1234" src={productCurtain} title="Eyelet Door 7 ft Curtains (Aqua Blue) Set of 2" price="330" />
                <Card id="12345" src={productCurtainTwo} title="Polyster Box Curtains Set of 2 (Black, 4 x 7)" price="339" />
                <Card id="1234" src={productCurtain} title="Eyelet Door 7 ft Curtains (Aqua Blue) Set of 2" price="359" />
                <Card id="12345" src={productCurtainTwo} title="Polyster Box Curtains Set of 2 (Black, 4 x 7)" price="339" />
                <Card id="1234" src={productCurtain} title="Eyelet Door 7 ft Curtains (Aqua Blue) Set of 2" price="359" />
                <Card id="12345" src={productCurtainTwo} title="Polyster Box Curtains Set of 2 (Black, 4 x 7)" price="339" />


            </div>
            <div className="product__rowTwo">
                <Card src={productTrain} title="Thomas toy train" price="799" />
                <Card src={productPeppa} title="Peppa Pig soft toys" price="499" />
                <Card src={productDoll} title="Barbie Helicopter" price="1599" />
            </div>
            <div className="product__rowThree">
                <Card src={productLG} title="LG 4K UHD TV" price="60000" />
            </div>
        </div>

    )
}

export default Product
