import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import { Button1DataContext, Button2DataContext, Button3DataContext, MoviesContext } from "../contexts/DataContext";
import axios from "axios";
import LoadingSpinnerTemplate from "../templates/LoadingSpinnerTemplate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default function App() {
    const [movies, setMovies] = useState();
    const [button1Data, setButton1Data] = useState();
    const [button2Data, setButton2Data] = useState();
    const [button3Data, setButton3Data] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            axios.get("/api/medias/fetch/show/").then((responseFetch) => {
                axios.get("/api/medias/movies/show/").then((responseMovies) => {
                    setButton1Data(responseFetch.data?.result?.button1);
                    setButton2Data(responseFetch.data?.result?.button2);
                    setButton3Data(responseFetch.data?.result?.button3);
                    setMovies(responseMovies.data?.result);
                    setLoading(false);
                }).catch(() => { });
            }).catch(() => { });
        }
    }, [button1Data, button2Data, button3Data, movies])

    return !loading ? (
        <MoviesContext.Provider value={[movies, setMovies]}>
            <Button1DataContext.Provider value={[button1Data, setButton1Data]}>
                <Button2DataContext.Provider value={[button2Data, setButton2Data]}>
                    <Button3DataContext.Provider value={[button3Data, setButton3Data]}>
                        <RouterProvider router={router} />
                    </Button3DataContext.Provider>
                </Button2DataContext.Provider>
            </Button1DataContext.Provider>
        </MoviesContext.Provider>
    ) : <LoadingSpinnerTemplate />;
}