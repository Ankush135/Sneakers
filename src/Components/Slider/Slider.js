import React, { useState, useRef } from "react";
import "./Slider.css";
import productData from "../../Data/productData";

export default function Slider(props) {
    const [currentView, setCurrentView] = useState(productData[0]);

    const ref = useRef([]);
    const addToRef = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    };

    const selectPicture = (e) => {
        ref.current.forEach((el) => {
            el.classList.remove("active");
            if (e.target === el) {
                el.classList.add("active");

                productData.forEach((pic) => {
                    if (pic.thumbnail === el.src) {
                        setCurrentView(productData[productData.indexOf(pic)]);
                    }
                });
            }
        });
    };

    const prevSlide = (e) => {
        productData.forEach((pic, index) => {
            if (pic.path === currentView.path) {
                if (index - 1 < 0) {
                    setCurrentView(productData[productData.length - 1]);
                } else {
                    setCurrentView(productData[index - 1]);
                }
            }
        });
    };

    const nextSlide = (e) => {
        productData.forEach((pic, index) => {
            if (pic.path === currentView.path) {
                if (index + 1 > productData.length - 1) {
                    setCurrentView(productData[0]);
                } else {
                    setCurrentView(productData[index + 1]);
                }
            }
        });
    };

    return (
        <div className="slider">
            <div className="slider-view">
                {props.children}
                <div onClick={prevSlide} className="slider-icon prev">
                    <svg
                        className="prev-icon"
                        width="12"
                        height="18"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11 1 3 9l8 8"
                            stroke="#1D2026"
                            strokeWidth="3"
                            fill="none"
                            fillRule="evenodd"
                        />
                    </svg>
                </div>
                <img
                    onClick={props.toggleLightbox}
                    src={currentView.path}
                    alt=""
                />
                <div onClick={nextSlide} className="slider-icon next">
                    <svg
                        className="next-icon"
                        width="13"
                        height="18"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="m2 1 8 8-8 8"
                            stroke="#1D2026"
                            strokeWidth="3"
                            fill="none"
                            fillRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            <div className="slider-thumbnails">
                {productData.map((picture, index) => {
                    return (
                        <div className={
                            currentView.id === productData[index].id
                                ? "thumbnail-box active"
                                : "thumbnail-box"
                                
                        } key={productData[index].id}>
                            <img
                                className={
                                    currentView.id === productData[index].id
                                        ? "thumbnail active"
                                        : "thumbnail"
                                }
                                onClick={selectPicture}
                                ref={addToRef}
                                
                                src={productData[index].thumbnail}
                                title={productData[index].title}
                                alt={productData[index].desc}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
