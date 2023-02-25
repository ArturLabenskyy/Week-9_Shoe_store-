import React from "react";

import { useLocation } from "react-router-dom";

import Wrapped from "../styles/ShoePage.styled";
import Navbar from "../components/Navbar";
import ShoeInfo from "../components/ShoeInfo";

const ShoePage = () => {
    const { state } = useLocation();
    const shoe = state.some;

    return (
        <Wrapped>
            <Navbar />
            <div className="shoe-page">
                <img src={shoe.image} alt={shoe.name} />
                <ShoeInfo shoe={shoe} />
            </div>
        </Wrapped>
    );
};

export default ShoePage;
