import React from "react";

import Navbar from "../components/Navbar";
import Wrapped from "../styles/Home.styled";

const Home = () => {
    return (
        <Wrapped>
            <Navbar />
            <div className="home-page">
                <h1>Welcome to Shoe App</h1>
                <h2>This is a Home Page</h2>
            </div>
        </Wrapped>
    );
};

export default Home;
