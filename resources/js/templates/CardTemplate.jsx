import React from 'react';
import { Button, Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';

export default function MovieCard({ movie }) {
    const { Title, Year, Poster, imdbID, Type } = movie;

    return (
        <Card>
            <CardMedia
                component="img"
                height="300"
                image={Poster}
                alt={Title}
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {Title}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                    {Year}
                </Typography>
                <Chip label={Type?.toUpperCase()} variant="outlined" />
                <center style={{marginTop: "25px"}}>
                    <a href={`https://www.imdb.com/title/${imdbID}`}>
                        <Button variant="contained">
                            Go to Imdb
                        </Button>
                    </a>
                </center>
            </CardContent>
        </Card>
    );
};