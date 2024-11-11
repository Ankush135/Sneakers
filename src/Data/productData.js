import ImgProduct1 from "../Assets/images/image-product-1.jpg";
import thumbnailProduct1 from "../Assets/images/image-product-1-thumbnail.jpg";
import ImgProduct2 from "../Assets/images/image-product-2.jpg";
import thumbnailProduct2 from "../Assets/images/image-product-2-thumbnail.jpg";
import ImgProduct3 from "../Assets/images/image-product-3.jpg";
import thumbnailProduct3 from "../Assets/images/image-product-3-thumbnail.jpg";
import ImgProduct4 from "../Assets/images/image-product-4.jpg";
import thumbnailProduct4 from "../Assets/images/image-product-4-thumbnail.jpg";
import { v4 as uuidv4 } from "uuid";

const productData = [
    {
        id: uuidv4(),
        path: `${ImgProduct1}`,
        thumbnail: `${thumbnailProduct1}`,
        title: "paire de sneakers vue du dessous",
        desc: "Paire de Sneakers blanche et orange",
    },
    {
        id: uuidv4(),
        path: `${ImgProduct2}`,
        thumbnail: `${thumbnailProduct2}`,
        title: "paire de sneakers vue du dessus",
        desc: "Paire de Sneakers blanche et orange",
    },
    {
        id: uuidv4(),
        path: `${ImgProduct3}`,
        thumbnail: `${thumbnailProduct3}`,
        title: "paire de sneakers vue du côté droit",
        desc: "Paire de Sneakers blanche et orange",
    },
    {
        id: uuidv4(),
        path: `${ImgProduct4}`,
        thumbnail: `${thumbnailProduct4}`,
        title: "paire de sneakers vue du côté gauche",
        desc: "Paire de Sneakers blanche et orange",
    },
];

export default productData;
