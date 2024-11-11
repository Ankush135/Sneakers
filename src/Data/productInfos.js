import thumbnailProduct1 from "../Assets/images/image-product-1-thumbnail.jpg";
import {v4 as uuidv4} from "uuid";

const productInfos = {
    id: uuidv4(),
    brand: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 250,
    discount: 50,
    quantity: 1,
    thumbnail: thumbnailProduct1
};

export default productInfos;
