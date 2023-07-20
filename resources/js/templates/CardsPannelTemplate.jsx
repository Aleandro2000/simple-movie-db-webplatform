import { Container, Grid } from "@mui/material";
import React from "react";
import MovieCard from "./CardTemplate";

export default function CardPannelTemplate({ data, sorted }) {
    return (
        <Container maxWidth="lg" sx={{ paddingTop: '2rem' }}>
            <Grid container spacing={2}>
                {data && data.map((movie, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        <MovieCard key={index} movie={movie} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}