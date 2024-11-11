import React from "react";
import Slider from "../Slider/Slider";
import "./Lightbox.css";

export default function Lightbox(props) {
    return (
        <div className="lightbox">
            <div className="lightbox-slider">
                <Slider>
                    {/* Icône close (X) */}
                    <svg onClick={props.toggleLightbox}
                        className="btn-close"
                        width="17"
                        height="18"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                            fill="#69707D"
                            fillRule="evenodd"
                        />
                    </svg>
                </Slider>
            </div>
        </div>
    );
}
