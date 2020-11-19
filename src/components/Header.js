import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import amazonlogo from '../images/amazonlogo.jpg'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'

function Header() {
    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className="navTab">
            <Link to="/">
                <img className="amazonlogo" src={amazonlogo} alt="amazonlogo"></img>
            </Link>
            <div className="header__search">
                <input className="search__input" placeholder="Find your product" type="text"></input>
                <SearchIcon className="search__icon" />
            </div>
            <div className="header__optionss">
                <div className="header__option">
                    <span className="header__optionfirst">Hello Guest</span>
                    <span className="header__optionsecond">Account & Lists </span>
                </div>
                <div className="header__option">
                    <span className="header__optionfirst">Returns</span>
                    <span className="header__optionsecond">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionfirst">Try</span>
                    <span className="header__optionsecond">Prime</span>
                </div>
            </div>

            <Link to="/checkout">
                <div className="shoppingCart_logo">
                    <ShoppingCartIcon />
                    <span>{basket?.length}</span>
                </div>
            </Link>

        </div>

    )
}

export default Header
