import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ProductPage from "./Layouts/ProductPage/ProductPage";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
    const [toggleCart, setToggleCart] = useState(false);

    const displayCartList = () => {
        setToggleCart(!toggleCart);
    };
    return (
        <Provider store={store}>
            <div className="App">
                <Navbar
                    displayCartList={displayCartList}
                    toggleCart={toggleCart}
                />
                <ProductPage />
            </div>
        </Provider>
    );
}

export default App;
