import React, { useContext, useState } from "react";
import NavbarTemplate from "../templates/NavbarTemplate";
import CardPannelTemplate from "../templates/CardsPannelTemplate";
import { Button1DataContext, Button2DataContext, Button3DataContext, MoviesContext, PostersContext } from "../contexts/DataContext";
import { FormControl, MenuItem, Select } from "@mui/material";

export default function Dashboard() {
    const [dataType, setDataType] = useState("");
    const [sorted, setSorted] = useState(false);
    const [button1] = useContext(Button1DataContext);
    const [button2] = useContext(Button2DataContext);
    const [button3] = useContext(Button3DataContext);
    const [movies] = useContext(MoviesContext);
    const [posters] = useContext(PostersContext);

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
            <center>
                <FormControl style={{
                    maxWidth: "400px",
                    width: "100%",
                    marginTop: "100px",
                }}>
                    <Select
                        labelId="select-label"
                        value={dataType}
                        onChange={handleChange}
                        label="Select Data Type"
                    >
                        <MenuItem value="">
                            <em>Select a Button</em>
                        </MenuItem>
                        <MenuItem value="button1">Button 1</MenuItem>
                        <MenuItem value="button2">Button 2</MenuItem>
                        <MenuItem value="button3">Button 3</MenuItem>
                        <MenuItem value="button3">Movies</MenuItem>
                        <MenuItem value="button3">Posters</MenuItem>
                    </Select>
                </FormControl>
            </center>
            <CardPannelTemplate data={getData(dataType)} sorted={sorted} />
        </>
    );
}