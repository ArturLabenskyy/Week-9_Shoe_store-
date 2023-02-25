import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/HomePage";
import Shoes from "./pages/ShoesPage";
import ShoePage from "./pages/ShoePage.js";
import AddNewShoes from "./pages/AddNewShoes";

import "./styles/style.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/shoes",
        element: <Shoes />,
    },
    {
        path: "/add-new-shoes",
        element: <AddNewShoes />,
    },
    {
        path: "/shoes/:id",
        element: <ShoePage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
