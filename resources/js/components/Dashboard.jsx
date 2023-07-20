import React, { useContext, useState } from "react";
import NavbarTemplate from "../templates/NavbarTemplate";
import CardPannelTemplate from "../templates/CardsPannelTemplate";
import { Button1DataContext, Button2DataContext, Button3DataContext, MoviesContext } from "../contexts/DataContext";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function Dashboard() {
    const [dataType, setDataType] = useState("");
    const [sorted, setSorted] = useState(false);
    const [alphabetic, setAlphabetic] = useState(false);
    const [imdbSort, setImdbSort] = useState(false);
    const [category, setCategory] = useState("");
    const [button1] = useContext(Button1DataContext);
    const [button2] = useContext(Button2DataContext);
    const [button3] = useContext(Button3DataContext);
    const [movies] = useContext(MoviesContext);

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
            default:
                return null;
        }
    }

    const handleChange = (setChange) => (event) => setChange(event.target.value);

    return (
        <div className="fade-in-effect" style={{ paddingBottom: "100px" }}>
            <NavbarTemplate />
            <center style={{ paddingTop: "100px" }}>
                <Button onClick={() => setDataType("button1")} style={{ margin: "5px" }} variant="contained">Button 1</Button>
                <Button onClick={() => setDataType("button2")} style={{ margin: "5px" }} variant="contained">Button 2</Button>
                <Button onClick={() => setDataType("button3")} style={{ margin: "5px" }} variant="contained">Button 3</Button>
                <br />
                <FormControl style={{
                    maxWidth: "400px",
                    width: "100%",
                    marginTop: "10px",
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
                        <MenuItem value="movies">Movies</MenuItem>
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
                        label="Select Sorted Type"
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
                        label="Select Alphabetic Type"
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
                    <InputLabel id="label-data-type">Sort by Imdb Id?</InputLabel>
                    <Select
                        labelId="select-label"
                        value={imdbSort}
                        defaultValue={imdbSort}
                        onChange={handleChange(setImdbSort)}
                        label="Select IMDB Sorted Type"
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
                    <InputLabel id="label-data-type">Choose Category</InputLabel>
                    <Select
                        labelId="select-label"
                        value={category}
                        defaultValue={category}
                        onChange={handleChange(setCategory)}
                        label="Select Category Type"
                    >
                        <MenuItem value="">All</MenuItem>
                        {
                            [...new Set(movies?.map((item) => item.Type))]?.map((item, key) => <MenuItem key={key} value={item}>{item}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </center>
            <CardPannelTemplate data={getData(dataType)} sorted={sorted} alphabetic={alphabetic} imdbSort={imdbSort} category={category} />
        </div>
    );
}