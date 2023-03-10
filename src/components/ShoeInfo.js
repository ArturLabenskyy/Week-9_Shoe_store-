import React, { useState } from "react";

import Wrapped from "../styles/ShoeInfo.styled";
import { useNavigate } from "react-router-dom";
import Api from "../API/api";
import { Button } from "@mui/material";

const ShoeInfo = ({ shoe }) => {
    const [read, setRead] = useState(true);
    const [editDisplay, setEdit] = useState("block");
    const [otherButtons, setOther] = useState("none");

    const [shoeName, setName] = useState(shoe.name);
    const [shoePrice, setPrice] = useState(shoe.price);
    const [shoeStock, setStock] = useState(shoe.inStock);
    const [shoeUrl, setUrl] = useState(shoe.image);

    const navigate = useNavigate();

    const editClick = () => {
        setOther("block");
        setEdit("none");
        setRead(false);
    };

    const cancelClick = () => {
        setOther("none");
        setEdit("block");
        setName(shoe.name);
        setPrice(shoe.price);
        setStock(shoe.inStock);
        setUrl(shoe.image);
        setRead(true);
    };

    const deleteClick = () => {
        Api.deleteShoe(shoe);
        navigate("/shoes");
    };

    const saveClick = () => {
        const newShoe = {
            id: shoe.id,
            name: shoeName,
            price: shoePrice,
            inStock: shoeStock,
            image: shoeUrl,
        };

        Api.updateShoe(newShoe);
        setOther("none");
        setEdit("block");
        setRead(true);
    };

    return (
        <Wrapped>
            <label>Model Name: </label>
            <input
                id="shoe-name"
                type="text"
                placeholder={shoeName}
                value={shoeName}
                readOnly={read}
                onChange={(e) => setName(e.target.value)}
            />
            <label>Price</label>
            <input
                id="shoe-price"
                type="number"
                placeholder={shoePrice}
                value={shoePrice}
                min="1"
                readOnly={read}
                onChange={(e) => setPrice(e.target.value)}
            />
            <label>Amount In Stock</label>
            <input
                id="in-stock"
                type="number"
                placeholder={shoeStock}
                value={shoeStock}
                min="1"
                readOnly={read}
                onChange={(e) => setStock(e.target.value)}
            />
            <label>Image URL</label>
            <input
                id="image-url"
                type="text"
                placeholder={shoeUrl}
                value={shoeUrl}
                readOnly={read}
                onChange={(e) => setUrl(e.target.value)}
            />
            <div className="buttons-container">
                <Button
                    variant="contained"
                    style={{ display: editDisplay }}
                    onClick={editClick}
                >
                    Edit
                </Button>
                <Button
                    variant="contained"
                    style={{ display: otherButtons }}
                    onClick={saveClick}
                >
                    Save
                </Button>
                <Button
                    variant="contained"
                    style={{ display: otherButtons }}
                    onClick={cancelClick}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    style={{ display: otherButtons }}
                    onClick={deleteClick}
                >
                    Delete
                </Button>
            </div>
        </Wrapped>
    );
};

export default ShoeInfo;
