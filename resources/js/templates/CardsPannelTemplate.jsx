import { Container, Grid } from "@mui/material";
import React from "react";
import MovieCard from "./CardTemplate";

export default function CardPannelTemplate({ data }) {
    return (
        <Container maxWidth="lg" sx={{ paddingTop: '2rem' }}>
            <Grid container spacing={2}>
                {data && Object.keys(data).map((button, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        {data[button].map((movie, movieIndex) => (
                            <MovieCard key={movieIndex} movie={movie} />
                        ))}
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}