import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Wrapped from "../styles/AddNewShoes.styled";
import Api from "../API/api";
import { Button } from "@mui/material";

const AddNewShoes = () => {
    const [shoeName, setName] = useState("");
    const [shoePrice, setPrice] = useState(0);
    const [shoeStock, setStock] = useState(0);
    const [shoeUrl, setUrl] = useState("");
    const [disable, setDisable] = useState(true);

    const navigate = useNavigate();

    const saveClick = () => {
        const newShoe = {
            name: shoeName,
            price: shoePrice,
            inStock: shoeStock,
            image: shoeUrl,
        };
        Api.addShoe(newShoe);
        navigate("/shoes");
    };

    const cancelClick = () => {
        navigate("/");
    };

    const checkFields = () => {
        if (
            shoeName.length > 1 &&
            shoePrice > 0 &&
            shoeStock > 0 &&
            shoeUrl.length > 1
        ) {
            setDisable(false);
        } else setDisable(true);
    };

    return (
        <Wrapped>
            <Navbar />
            <div className="new-shoes">
                <label>Model Name: </label>
                <input
                    id="shoe-name"
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value);
                        checkFields();
                    }}
                />
                <label>Price</label>
                <input
                    id="shoe-price"
                    type="number"
                    min="1"
                    onChange={(e) => {
                        setPrice(e.target.value);
                        checkFields();
                    }}
                />
                <label>Amount In Stock</label>
                <input
                    id="in-stock"
                    type="number"
                    min="1"
                    onChange={(e) => {
                        setStock(e.target.value);
                        checkFields();
                    }}
                />
                <label>Image URL</label>
                <input
                    id="image-url"
                    type="text"
                    onChange={(e) => {
                        setUrl(e.target.value);
                        checkFields();
                    }}
                />
                <div className="buttons-container">
                    <Button
                        variant="contained"
                        onClick={saveClick}
                        disabled={disable}
                    >
                        Save
                    </Button>
                    <Button variant="contained" onClick={cancelClick}>
                        Cancel
                    </Button>
                </div>
            </div>
        </Wrapped>
    );
};

export default AddNewShoes;
