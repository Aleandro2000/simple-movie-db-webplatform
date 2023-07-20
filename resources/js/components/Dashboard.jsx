import React, { useContext, useState } from "react";
import NavbarTemplate from "../templates/NavbarTemplate";
import CardPannelTemplate from "../templates/CardsPannelTemplate";
import { Button1DataContext, Button2DataContext, Button3DataContext, MoviesContext, PostersContext } from "../contexts/DataContext";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function Dashboard() {
    const [dataType, setDataType] = useState("");
    const [sorted, setSorted] = useState(false);
    const [alphabetic, setAlphabetic] = useState(false);
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

    const handleChange = (setChange) => (event) => setChange(event.target.value);

    return (
        <div className="fade-in-effect" style={{paddingBottom: "100px"}}>
            <NavbarTemplate />
            <center>
                <FormControl style={{
                    maxWidth: "400px",
                    width: "100%",
                    marginTop: "100px",
                }}>
                    <InputLabel id="label-data-type">Select Data Type</InputLabel>
                    <Select
                        labelId="select-label"
                        value={dataType}
                        defaultValue={dataType}
                        onChange={handleChange(setDataType)}
                        label="Select Data Type"
                    >
                        <MenuItem disabled value="">
                            <em>Select Data Type</em>
                        </MenuItem>
                        <MenuItem value="button1">Button 1</MenuItem>
                        <MenuItem value="button2">Button 2</MenuItem>
                        <MenuItem value="button3">Button 3</MenuItem>
                        <MenuItem value="button3">Movies</MenuItem>
                        <MenuItem value="button3">Posters</MenuItem>
                    </Select>
                </FormControl>
            </center>
            <center>
                <FormControl style={{
                    maxWidth: "400px",
                    width: "100%",
                    marginTop: "10px",
                }}>
                    <InputLabel id="label-data-type">Sorted?</InputLabel>
                    <Select
                        labelId="select-label"
                        value={sorted}
                        defaultValue={sorted}
                        onChange={handleChange(setSorted)}
                        label="Select Data Type"
                    >
                        <MenuItem value={false}>NO</MenuItem>
                        <MenuItem value={true}>YES</MenuItem>
                    </Select>
                </FormControl>
            </center>
            <center>
                <FormControl style={{
                    maxWidth: "400px",
                    width: "100%",
                    marginTop: "10px",
                }}>
                    <InputLabel id="label-data-type">Alphabetic?</InputLabel>
                    <Select
                        labelId="select-label"
                        value={alphabetic}
                        defaultValue={alphabetic}
                        onChange={handleChange(setAlphabetic)}
                        label="Select Data Type"
                    >
                        <MenuItem value={false}>NO</MenuItem>
                        <MenuItem value={true}>YES</MenuItem>
                    </Select>
                </FormControl>
            </center>
            <CardPannelTemplate data={getData(dataType)} sorted={sorted} alphabetic={alphabetic} />
        </div>
    );
}