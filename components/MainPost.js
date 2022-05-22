import * as React from 'react';
import { Typography, Grid } from '@mui/material';
import Link from 'next/link';


const MainPost = () => {
    return (
        <Grid container justifyContent="center" sx={{ marginTop: 6, marginBottom: 6}}>
            <Grid container justifyContent="center">
                <Typography component="h2" variant="h2" color="inherit">
                    Buy or sale property quickly
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography component="h2" variant="h2" color="inherit" gutterBottom>
                    and securily with r-estate
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography variant="h5" color="inherit">
                    start to actualize your
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography variant="h5" color="inherit">
                    real estate transactions in a shorter
                 </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography variant="h5" color="inherit" paragraph>
                    time and more securely
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Link href='/main'>
                    <a>
                        <Typography variant="h5" sx={{ color: "#263238", textDecoration: 'underline'}} display="inline">
                            Review Now
                        </Typography>
                    </a>
                </Link>
            </Grid>
            
        </Grid>
    );
}

export default MainPost;