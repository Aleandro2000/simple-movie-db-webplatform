import React, { useState } from "react";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import { DataContext } from "../contexts/DataContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: Dashboard,
    },
    {
        path: "*",
        element: NotFound,
    },
]);

export default function App() {
    const [data, setData] = useState();

    return (
        <DataContext.Provider value={[data, setData]}>
            <BrowserRouter>
                <RouterProvider router={router} />
            </BrowserRouter>
        </DataContext.Provider>
    );
}