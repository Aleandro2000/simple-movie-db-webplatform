import React, { useContext, useState } from "react";
import NavbarTemplate from "../templates/NavbarTemplate";
import CardPannelTemplate from "../templates/CardsPannelTemplate";
import { Button1DataContext, Button2DataContext, Button3DataContext, MoviesContext, PostersContext } from "../contexts/DataContext";
import { LoadingContext } from "../contexts/LoadingContext";
import { MenuItem, Select } from "@mui/material";

export default function Dashboard() {
    const [dataType, setDataType] = useState("");
    const [sorted, setSorted] = useState(false);
    const [button1] = useContext(Button1DataContext);
    const [button2] = useContext(Button2DataContext);
    const [button3] = useContext(Button3DataContext);
    const [movies, setMovies] = useContext(MoviesContext);
    const [posters, setPosters] = useContext(PostersContext);
    const [loading, setLoading] = useContext(LoadingContext);

    const getData = (type) => {
        switch (type) {
            case "button1":
                return button1;
            case "button2":
                return button2;
            case "button3":
                return button3;
            case "movies":
                return movies;
            case "posters":
                return posters;
            default:
                return null;
        }
    }

    const handleChange = (event) => setDataType(event.target.value);

    return (
        <>
            <NavbarTemplate />
            <Select
                labelId="select-label"
                value={selectedOption}
                onChange={handleChange}
                label="Select Option"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
            </Select>
            <CardPannelTemplate />
        </>
    );
}