import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import ShowerIcon from '@mui/icons-material/Shower';


const Properties = (props) => {

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    const { post } = props;

    return (
        <Box sx={{ flexGrow: 1, marginTop: 6, marginLeft: 2, maxWidth: 280, minWidth: 280}}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <CardActionArea component="a" href={`/property/${post.id}`}>
                        <Card>
                            <Grid style={{ display:'flex', justifyContent:'center' }}>
                                <CardMedia
                                    component="img"
                                    sx={{ height: 200}}
                                    image={post.photo}
                                    alt={post.name}
                                />
                            </Grid>
                            <CardContent sx={{ flex: 1, maxWidth: 300 }}>
                                <Typography sx= {{ fontWeight: "bold", fontSize: 18 }}>
                                    {post.title}
                                </Typography>
                                <Typography variant="subtitle1" paragraph sx={{ marginTop: 1}}>
                                    {post.description}
                                </Typography>
                                <Box 
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        flexWrap: 'nowrap',
                                        bgcolor: 'background.paper',
                                        maxWidth: 300,
                                    }}>
                                        <LocationOnIcon sx={{ marginRight: -1}}/> {post.city} 
                                        <BedroomParentIcon sx={{ marginRight: -1}} /> {post.bedroom}
                                        <ShowerIcon sx={{ marginRight: -1}}/> {post.bath}
                                        <Typography>{post.size} sq.m</Typography>
                                </Box>
                                <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        flexWrap: 'nowrap',
                                        bgcolor: 'background.paper',
                                        maxWidth: 300,
                                        marginLeft: 1,
                                        marginRight: 1,
                                        marginTop: 3    
                                    }}>
                                        <Box item>
                                            <Typography sx={{ fontSize: 20, fontWeight: 'bold'}}>
                                                {formatter.format(post.price)}
                                            </Typography>
                                        </Box>
                                        <Box item sx={{backgroundColor: '#e8f5e9', borderRadius: '10%'}}>
                                            <Typography sx={{ fontSize: 20, marginLeft:1, marginRight:1}} >
                                                {post.type}
                                            </Typography>
                                        </Box>
                                </Box>
                            </CardContent>                          
                        </Card>
                    </CardActionArea>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Properties;