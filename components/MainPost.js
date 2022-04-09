import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

let imageUrl = "https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/web_lrg-7256e6b0174e3eb40292.webp";
//https://www.realestatelanduseandenvironmentallaw.com/wp-content/uploads/sites/48/2022/02/Blog-Feature-Image-Template-1.png
//https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/web_lrg-7256e6b0174e3eb40292.webp

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
        </Grid>
    );
}

export default MainPost;