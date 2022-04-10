import * as React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';


const SmallPost = (props) => {

    const { post } = props;

    return (
        <Box sx={{ flexGrow: 1, marginTop: 6, marginLeft: 5}}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card sx={{ height: 380}}>
                        <Grid style={{ display:'flex', justifyContent:'center' }}>
                            <CardMedia
                                component="img"
                                sx={{ marginTop: "10px", width: 120, height: 120, borderRadius: '50%'}}
                                image={post.image}
                                alt={post.imageLabel}
                            />
                        </Grid>
                        <CardContent sx={{ flex: 1, maxWidth: 350, marginTop: 2 }}>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <br />
                            <Typography variant="subtitle1" paragraph>
                                {post.description}
                            </Typography>
                        </CardContent>                          
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SmallPost;