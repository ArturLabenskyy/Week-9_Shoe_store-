import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Wrapped from "../styles/Shoe.styled";

const Shoe = ({ shoe }) => {
    return (
        <Wrapped>
            <Card sx={{ maxWidth: 220 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="120"
                        image={shoe.image}
                        alt={shoe.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {shoe.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            <p>Price: {shoe.price} ₪</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Wrapped>
    );
};

export default Shoe;
