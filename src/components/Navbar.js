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
                <Link to="/">
                    <Button variant="contained">Home</Button>
                </Link>

                <Link to="/shoes">
                    <Button variant="contained">Shoes</Button>
                </Link>
            </div>
            <h2>Shoe App by Ar2r</h2>

            <Link to="/add-new-shoes" className="add-link">
                <Button variant="contained" className="add-new-shoe">
                    Add New Shoes
                </Button>
            </Link>
        </Wrapped>
    );
};

export default Navbar;
