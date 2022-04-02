import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

let imageUrl = "https://images.squarespace-cdn.com/content/v1/5935d734e3df28babfeb4b68/1561568009603-83H993L929848Y1DWVD9/Thinkset_Blockchain.gif?format=1000w";

const MainPost = () => {
    return (
        <Paper
            sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${imageUrl})`,
            top: 15,
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
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container >
                <Grid item md={8}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 8 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            What is Lorem Ipsum?
                        </Typography>
                        <Typography variant="h6" color="inherit" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type 
                            and scrambled it to make a type specimen book. It has survived not 
                            only five centuries.
                        </Typography>
                        <Link variant="subtitle1" href="#">
                            Test Link
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default MainPost;