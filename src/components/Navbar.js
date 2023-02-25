import React from "react";
import { GiFootsteps } from "react-icons/gi";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import Wrapped from "../styles/Navbar.styled";

const Navbar = () => {
    return (
        <Wrapped>
            <GiFootsteps className="navbar-logo" />
            <div className="buttons">
                <Button variant="contained">
                    <Link to="/">Home</Link>
                </Button>
                <Button variant="contained">
                    <Link to="/shoes">Shoes</Link>
                </Button>
            </div>
            <h2>Shoe App by Ar2r</h2>
            <Button variant="contained" className="add-new-shoe">
                <Link to="/add-new-shoes">Add New Shoes</Link>
            </Button>
        </Wrapped>
    );
};

export default Navbar;
