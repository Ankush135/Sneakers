import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ProductPage from "./Layouts/ProductPage/ProductPage";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
// import Footer from "./Components/Footer/Footer";

function App() {
    const [toggleCart, setToggleCart] = useState(false);

    const displayCartList = () => {
        setToggleCart(!toggleCart);
    };

    // Todo: fermeture du panier lors d'un clic extérieur
    // useEffect(() => {
    //     document.addEventListener("mouseup", hideCartList);

    //     function hideCartList(e) {
    //         const cartElements = [
    //             "cart",
    //             "cart-header",
    //             "cart-list",
    //             "cart-item",
    //             "cart-item-img",
    //             "cart-item-infos",
    //             "cart-item-name",
    //             "cart-item-calc",
    //             "cart-item-total",
    //             "bin",
    //             "cart-checkout-btn",
    //         ];
    //         let found = false;

    //         for (let element of cartElements) {
    //             if (e.target.classList.contains(element)) {
    //                 found = true;
    //                 break;
    //             }
    //         }

    //         if (found === false) {
    //             setToggleCart(false);
    //         } else {
    //             return;
    //         }
    //     }

    //     return () => {
    //         document.removeEventListener("mouseup", hideCartList);
    //     };
    // }, []);

    return (
        <Provider store={store}>
            <div className="App">
                <Navbar
                    displayCartList={displayCartList}
                    toggleCart={toggleCart}
                />
                <ProductPage />
                {/* <Footer /> */}
            </div>
        </Provider>
    );
}

export default App;
