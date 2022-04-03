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
        <Paper
            sx={{
            position: 'relative',
            backgroundColor: 'grey.400',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${imageUrl})`,
            top: 10,
            }}
        >
            {<img style={{ display: 'none' }} src={imageUrl}  />}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.4)',
                }}
            />
            <Grid container justifyContent="center" >
                <Grid item md={8}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 8 },
                            pr: { md: 0 },
                            marginTop: 3,
                            marginBottom: 3,
                        }}
                    >
                        <Grid container justifyContent="center">
                            <Typography component="h2" variant="h3" color="inherit" gutterBottom>
                                Buy and sale property safely
                            </Typography>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Typography variant="h5" color="inherit" paragraph>
                                start learning the skills for the 
                            </Typography>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Typography variant="h5" color="inherit" paragraph>
                                learn web3 development earn crypto rewards
                            </Typography>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Typography variant="h5" color="inherit" paragraph>
                                and get paid while you learn
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default MainPost;