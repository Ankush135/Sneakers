import React, { useState, useRef } from "react";
import "./Slider.css";
import productData from "../../Data/productData";

export default function Slider(props) {
    const [currentView, setCurrentView] = useState(productData[0]);

    // Manipulation des thumbnails
    const ref = useRef([]);
    const addToRef = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    };

    // Sélection d'une image
    const selectPicture = (e) => {
        // Surbrillance de l'image sélectionnée
        ref.current.forEach((el) => {
            el.classList.remove("active");
            if (e.target === el) {
                el.classList.add("active");

                // Passage de la photo sélectionnée dans la vue principale
                productData.forEach((pic) => {
                    if (pic.thumbnail === el.src) {
                        setCurrentView(productData[productData.indexOf(pic)]);
                    }
                });
            }
        });
    };

    // Défilement des slides vers la gauche
    const prevSlide = (e) => {
        // On compare la vue actuelle au tableau des données pour identifier son index
        productData.forEach((pic, index) => {
            if (pic.path === currentView.path) {
                // On ajuste l'index de la slide suivante à afficher en fonction de la position actuelle dans productData
                if (index - 1 < 0) {
                    setCurrentView(productData[productData.length - 1]);
                } else {
                    setCurrentView(productData[index - 1]);
                }
            }
        });
    };

    // Défilement des slides vers la droite
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
            {/* Vue principale */}
            <div className="slider-view">
                {props.children}
                {/* Icône "previous" */}
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
                    // Ouverture de la lightbox au clic
                    onClick={props.toggleLightbox}
                    src={currentView.path}
                    alt=""
                />
                {/* Icône "next" */}
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
            {/* Bandeau inférieur de vignettes */}
            <div className="slider-thumbnails">
                {/* Vignettes */}
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
