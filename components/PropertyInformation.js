import React from 'react';
import { CardContent, Container, Typography } from "@mui/material";
import Divider from '@mui/material/Divider'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import ShowerIcon from '@mui/icons-material/Shower';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import PoolIcon from '@mui/icons-material/Pool';
import Grid from '@mui/material/Grid';


const PropertyInformation = (props) => {

    const { propertyInfo, title } = props;

    return (
        <Card sx={{ display: 'flex', backgroundColor: '#f5f5f5'}}>
            <CardContent sx={{ marginTop: 4, marginLeft: 2, marginRight: 5}}>
                <Typography sx={{ fontSize: 23, width: 170, fontFamily: 'Raleway'}}>{title}</Typography>
            </CardContent>
            <CardContent>
                <Divider orientation="vertical"/>   
            </CardContent>
            <CardContent>
                {title == "Overview" ?
                        <Typography sx={{ marginTop: 1 }}>{propertyInfo.detail}</Typography> :
                        <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                height: 93
                             }}
                        >
                            <Box item>
                                <Grid container spacing={1} sx={{ marginTop: 1}}>
                                    <Grid item>
                                        <HomeIcon />
                                    </Grid>
                                    <Grid item>
                                        <Typography>
                                            Property Type: {propertyInfo.type}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} sx={{marginTop: 0}}>
                                    <Grid item>
                                        <BedroomParentIcon />
                                    </Grid>
                                    <Grid item>
                                        <Typography>
                                            Bedrooms: {propertyInfo.bedroom}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box item sx={{ marginLeft: 3 }}>
                                <Divider orientation="vertical"/>   
                            </Box>  
                            <Box item sx={{ marginLeft: 3 }}>
                                <Grid container spacing={1} sx={{ marginTop: 1}}>
                                    <Grid item>
                                        <ShowerIcon />
                                    </Grid>
                                    <Grid item>
                                        <Typography>
                                            Bathrooms: {propertyInfo.bath}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} sx={{marginTop: 0}}>
                                    <Grid item>
                                        <LocationOnIcon />
                                    </Grid>
                                    <Grid item>
                                        <Typography>
                                            Location: {propertyInfo.city}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box item sx={{ marginLeft: 3 }}>
                                <Divider orientation="vertical"/>   
                            </Box>
                            <Box item sx={{ marginLeft: 3 }}>
                                <Grid container spacing={1} sx={{ marginTop: 1}}>
                                    <Grid item>
                                        <SquareFootIcon />
                                    </Grid>
                                    <Grid item>
                                        <Typography>
                                            Living area(sqm): {propertyInfo.size}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} sx={{marginTop: 0}}>
                                    <Grid item>
                                        <PoolIcon />
                                    </Grid>
                                    <Grid item>
                                        <Typography>
                                            Pool: {propertyInfo.pool}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>      
                    }
            </CardContent>
        </Card>
    )
}
export default PropertyInformation;