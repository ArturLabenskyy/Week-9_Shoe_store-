import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Wrapped from "../styles/Shoes.styled";
import Navbar from "../components/Navbar";
import Shoe from "../components/ShoeCard";

import Api from "../API/api";

const Shoes = () => {
    const [shoes, setData] = useState([]);

    useEffect(() => {
        Api.getShoes().then((data) => {
            setData(data);
        });
    }, []);

    return (
        <Wrapped className="shoes-page">
            <Navbar />
            <div className="shoes-table">
                {shoes.length > 0 ? (
                    shoes.map((el) => {
                        return (
                            <Link
                                to={`/shoes/${el.id}`}
                                key={el.id}
                                state={{ some: el }}
                            >
                                <Shoe shoe={el} key={el.id} />
                            </Link>
                        );
                    })
                ) : (
                    <h1>There No Shoes In Stock</h1>
                )}
            </div>
        </Wrapped>
    );
};

export default Shoes;
