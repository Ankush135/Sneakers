import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Navbar.css";
import logoSneakers from "../../Assets/images/logo.svg";
import imgAvatar from "../../Assets/images/image-avatar.png";
import iconMenu from "../../Assets/images/icon-menu.svg";
import closeMenu from "../../Assets/images/icon-close.svg";
import Cart from "../Cart/Cart";

export default function Navbar(props) {
    const { displayCartList, toggleCart } = props;

    const cart = useSelector((state) => state.cart);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [counter, setCounter] = useState(30);

    useEffect(() => {
        let totalQty = 0;
        cart.forEach((item) => {
            totalQty += item.quantity;
        });
        setCounter(totalQty);
    }, [cart]);

    const openCloseMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    const handleCartClick = () => {
        setIsCartOpen(!isCartOpen);
        displayCartList();
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    return (
        <>
            
            <div 
                className={`cart-overlay ${isCartOpen ? "active" : ""}`} 
                onClick={closeCart}
            ></div>

            <div className={toggleMenu ? "menu-overlay" : ""}></div>

            <nav className="navbar">
                <img
                    onClick={openCloseMenu}
                    src={iconMenu}
                    alt="bouton menu"
                    className="toggle-menu-btn"
                    title="Menu"
                />
                <a href="#" className="nav-logo">
                    <img
                        src={logoSneakers}
                        alt="logo Sneakers"
                        title="Sneakers"
                    />
                </a>
                <div className={toggleMenu ? "nav-group active" : "nav-group"}>
                    <img
                        onClick={openCloseMenu}
                        src={closeMenu}
                        alt="bouton menu"
                        className="close-menu-btn"
                        title="Fermer"
                    />
                    <a className="nav-link" href="#">
                        Collections
                    </a>
                    <a className="nav-link" href="#">
                        Men
                    </a>
                    <a className="nav-link" href="#">
                        Women
                    </a>
                    <a className="nav-link" href="#">
                        About
                    </a>
                    <a className="nav-link" href="#">
                        Contact
                    </a>
                </div>
                <div className="nav-icons">
                    <div className="cart-box">
                        <svg
                            className="cart-logo"
                            onClick={handleCartClick}
                            width="22"
                            height="20"
                            alt="Panier d'achat"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                                fill="#69707D"
                                fillRule="nonzero"
                            />
                        </svg>
                        {counter !== 0 && (
                            <span className="cart-counter">{counter}</span>
                        )}
                    </div>
                    <img
                        className="avatar"
                        src={imgAvatar}
                        alt="Portrait utilisateur"
                        title="Mon compte"
                    />
                </div>
                {isCartOpen && <Cart />}
            </nav>
        </>
    );
}
