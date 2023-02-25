import React, { useState } from "react";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Wrapped from "../styles/AddNewShoes.styled";
import Api from "../API/api";

const AddNewShoes = () => {
    const [shoeName, setName] = useState("");
    const [shoePrice, setPrice] = useState(0);
    const [shoeStock, setStock] = useState(0);
    const [shoeUrl, setUrl] = useState("");

    const saveClick = () => {
        if (
            shoeName.length > 1 &&
            shoePrice > 0 &&
            shoeStock > 0 &&
            shoeUrl.length > 1
        ) {
            const newShoe = {
                name: shoeName,
                price: shoePrice,
                inStock: shoeStock,
                image: shoeUrl,
            };
            Api.addShoe(newShoe);
        }
    };

    return (
        <Wrapped>
            <Navbar />
            <div className="new-shoes">
                <label>Model Name: </label>
                <input
                    id="shoe-name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Price</label>
                <input
                    id="shoe-price"
                    type="number"
                    min="1"
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label>Amount In Stock</label>
                <input
                    id="in-stock"
                    type="number"
                    min="1"
                    onChange={(e) => setStock(e.target.value)}
                />
                <label>Image URL</label>
                <input
                    id="image-url"
                    type="text"
                    onChange={(e) => setUrl(e.target.value)}
                />
                <div className="buttons-container">
                    <Link to={"/"}>
                        <button onClick={saveClick}>Save</button>
                    </Link>

                    <Link to="/">
                        <button>Cancel</button>
                    </Link>
                </div>
            </div>
        </Wrapped>
    );
};

export default AddNewShoes;
