import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

const SmallPost = (props) => {

    const { post } = props;

    return (
        <Box sx={{ flexGrow: 1, marginTop: 6, marginLeft: 5}}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CardActionArea component="a" href="#">
                        <Card>
                            <Grid style={{ display:'flex', justifyContent:'center' }}>
                                <CardMedia
                                    component="img"
                                    sx={{ marginTop: "10px", width: 120, height: 120, borderRadius: '50%'}}
                                    image={post.image}
                                    alt={post.imageLabel}
                                />
                            </Grid>
                            <CardContent sx={{ flex: 1, maxWidth: 300 }}>
                                <Typography component="h2" variant="h5">
                                    {post.title}
                                </Typography>
                                <br />
                                <Typography variant="subtitle1" paragraph>
                                    {post.description}
                                </Typography>
                                <Typography variant="subtitle1" color="primary">
                                    Continue reading...
                                </Typography>
                            </CardContent>                          
                        </Card>
                    </CardActionArea>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SmallPost;