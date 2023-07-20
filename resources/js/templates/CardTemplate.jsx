import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function MovieCard({ movie }){
  const { Title, Year, Poster } = movie;

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
      </CardContent>
    </Card>
  );
};