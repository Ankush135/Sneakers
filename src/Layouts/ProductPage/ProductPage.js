import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import productInfosTxt from "../../Data/productInfos";
import BadgeDiscount from "../../Components/BadgeDiscount/BadgeDiscount";
import BrandSubtitle from "../../Components/BrandSubtitle/BrandSubtitle";
import CurrentPrice from "../../Components/CurrentPrice/CurrentPrice";
import Lightbox from "../../Components/Lightbox/Lightbox";
import OldPrice from "../../Components/OldPrice/OldPrice";
import Slider from "../../Components/Slider/Slider";
import "./ProductPage.css";
import ButtonCTA from "../../Components/ButtonCTA/ButtonCTA";

export default function ProductPage() {
    const [lightboxActive, setLightboxActive] = useState(false);
    const [productInfos, setProductInfos] = useState(productInfosTxt);

    const toggleLightbox = () => {
        setLightboxActive(!lightboxActive);
    };

    const [quantity, setQuantity] = useState(0);

    const updateQuantity = (qty) => {
        setQuantity(qty);
    };

    const qtyRef = useRef();

    const addQuantity = () => {
        let newQuantity = Number(qtyRef.current.innerText);
        setQuantity(newQuantity + 1);
    };

    const removeQuantity = () => {
        let newQuantity = Number(qtyRef.current.innerText);

        if (newQuantity - 1 < 0) {
            setQuantity(0);
        } else {
            setQuantity(newQuantity - 1);
        }
    };

    const dispatch = useDispatch();

    return (
        <div className="product-container">
            <Slider toggleLightbox={toggleLightbox} />
            {lightboxActive && <Lightbox toggleLightbox={toggleLightbox} />}

            <div className="product-infos">
                <BrandSubtitle>{productInfos.brand}</BrandSubtitle>
                <h1>{productInfos.title}</h1>
                <p className="product-desc">{productInfos.desc}</p>
                <div className="pricing-box">
                    <div className="current-price-grp">
                        <CurrentPrice>
                            {(
                                (productInfos.price * productInfos.discount) /
                                100
                            ).toFixed(2)}
                        </CurrentPrice>
                        <BadgeDiscount>{productInfos.discount}</BadgeDiscount>
                    </div>
                    <OldPrice>{productInfos.price.toFixed(2)}</OldPrice>
                </div>

                <div className="buttons-box">
                    <div className="btn-qty">
                        <div onClick={removeQuantity} className="minus">
                            <svg
                                id="minus"
                                width="12"
                                height="4"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                                    fill="#FF7E1B"
                                    fillRule="nonzero"
                                />
                            </svg>
                        </div>
                        <span
                            onChange={() =>
                                updateQuantity(Number(qtyRef.current.innerText))
                            }
                            ref={qtyRef}
                            className="qty"
                        >
                            {quantity}
                        </span>
                        <div onClick={addQuantity} className="plus">
                            <svg
                                id="plus"
                                width="12"
                                height="12"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                                    fill="#FF7E1B"
                                    fillRule="nonzero"
                                />
                            </svg>
                        </div>
                    </div>
                    <div
                        className="btn-cta-box"
                        onClick={() =>
                            dispatch({
                                type: "cart/addItem",
                                payload: {
                                    id: productInfos.id,
                                    brand: productInfos.brand,
                                    title: productInfos.title,
                                    price: productInfos.price,
                                    discount: productInfos.discount,
                                    quantity: quantity,
                                    thumbnail: productInfos.thumbnail,
                                },
                            })
                        }
                    >
                        <ButtonCTA>
                            <svg
                                width="22"
                                height="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                                    fill="#69707D"
                                    fillRule="nonzero"
                                />
                            </svg>
                            <span className="btn-cta-txt">Add to cart</span>
                        </ButtonCTA>
                    </div>
                </div>
            </div>
        </div>
    );
}
