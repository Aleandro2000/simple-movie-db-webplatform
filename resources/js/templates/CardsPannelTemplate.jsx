import { Container, Grid } from "@mui/material";
import React from "react";
import MovieCard from "./CardTemplate";

export default function CardPannelTemplate({ data, sorted, alphabetic, imdbSort, category }) {
    return (
        <Container maxWidth="lg" sx={{ paddingTop: '2rem' }}>
            <Grid container spacing={2}>
                {data && [...data]?.filter((item) => category ? item?.Type === category : true)?.sort((a, b) => (
                    sorted && a?.Year - b?.Year
                ))?.sort((a, b) => {
                    const nameA = a?.Title?.toUpperCase();
                    const nameB = b?.Title?.toUpperCase();
                    if (nameA < nameB) return alphabetic ? -1 : 0;
                    if (nameA > nameB) return alphabetic ? 1 : 0;
                    return 0;
                })?.sort((a, b) => {
                    const nameA = a?.imdbID?.toUpperCase();
                    const nameB = b?.imdbID?.toUpperCase();
                    if (nameA < nameB) return imdbSort ? -1 : 0;
                    if (nameA > nameB) return imdbSort ? 1 : 0;
                    return 0;
                }).map((movie, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        <MovieCard key={index} movie={movie} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}