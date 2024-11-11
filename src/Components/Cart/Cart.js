import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div className="cart">
            <div className="cart-header">Cart</div>
            {cart.length !== 0 ? (
                <div className="cart-list">
                    {cart.map((item) => {
                        return (
                            <div key={uuidv4()} className="cart-item">
                                <img
                                    className="cart-item-img"
                                    src={item.thumbnail}
                                    alt=""
                                />
                                <div className="cart-item-infos">
                                    <span className="cart-item-name">
                                        {item.title}
                                    </span>
                                    <span className="cart-item-calc">
                                        ${(item.price * item.discount) / 100} x{" "}
                                        {item.quantity}
                                        <span className="cart-item-total">
                                            $
                                            {((item.price * item.discount) /
                                                100) *
                                                item.quantity}
                                        </span>
                                    </span>
                                </div>
                                <svg
                                    className="bin"
                                    onClick={() =>
                                        dispatch({
                                            type: "cart/deleteItem",
                                            payload: item.id,
                                        })
                                    }
                                    width="14"
                                    height="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        className="bin"
                                        d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                                        fill="#C3CAD9"
                                        fillRule="nonzero"
                                    />
                                </svg>
                            </div>
                        );
                    })}
                    <button className="cart-checkout-btn">Checkout</button>
                </div>
            ) : (
                <p className="cart-empty">Your cart is empty.</p>
            )}
        </div>
    );
}
