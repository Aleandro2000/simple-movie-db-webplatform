import React from "react";
import { Typography, Container, Paper } from '@mui/material';

export default function NotFound() {
    return (
        <div className="fade-in-effect">
            <Container maxWidth="sm" sx={{ marginTop: '2rem', textAlign: 'center' }}>
                <Paper elevation={3} sx={{ padding: '2rem' }}>
                    <Typography variant="h1" component="h1" gutterBottom>
                        404
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Page Not Found
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        The page you are looking for does not exist.
                    </Typography>
                </Paper>
            </Container>
        </div>
    );
}