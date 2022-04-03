import React from 'react';
import { CardContent, Container, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import Carousel from 'react-material-ui-carousel'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Footer from '../../components/Footer';
import Divider from '@mui/material/Divider'
import PropertyInformation from '../../components/PropertyInformation';

const properties = [
    {
        id: 1,
        title: 'The standard chunk of Lorem Ipsum used since the',
        description: 'It is a long established fact that a reader will be distracted by',
        name: 'Deneme1',
        city: 'Istanbul',
        room: 3,
        bedroom: 2,
        bath: 2,
        price: 100000,
        type: 'Villa',
        pool: 'No',
        size: 150,
        photo: 'https://media.architecturaldigest.com/photos/56d9ef71ce4f38152ccc96f4/2:1/w_5130,h_2565,c_limit/designers-homes-02.jpg',
        detail: 'With beautiful views heading out towards the city landscape in one direction and'+
                'sea in the other direction, these contemporary apartments are found in Maltepe on'+
                'the Anatolian side of Istanbul and are available today at bargain prices not to miss out on.'
    },
    {
        id: 2,
        title: 'The standard chunk of Lorem Ipsum used since the',
        description: 'It is a long established fact that a reader will be distracted by',
        name: 'Deneme2',
        city: 'Istanbul',
        room: 5,
        bedroom: 2,
        bath: 2,
        pool: 'No',
        price: 100000,
        type: 'Villa',
        size: 150,
        photo: 'https://media.architecturaldigest.com/photos/571e97c5741fcddb16b559c9/2:1/w_5127,h_2563,c_limit/modernist-decor-inspiration-01.jpg',
    },
    {
        id: 3,
        title: 'The standard chunk of Lorem Ipsum used since the',
        description: 'It is a long established fact that a reader will be distracted by',
        name: 'Deneme3',
        city: 'Istanbul',
        room: 8,
        bedroom: 2,
        bath: 2,
        price: 100000,
        pool: 'Yes',
        type: 'Villa',
        size: 150,
        photo: 'https://interiordesign.net/wp-content/uploads/2021/12/Interior-Design-L-Petresku-Studio-Ukraine-750_4100-HDR.jpg',
    },
    {
        id: 4,
        title: 'The standard chunk of Lorem Ipsum used since the',
        description: 'It is a long established fact that a reader will be distracted by',
        name: 'Deneme4',
        city: 'Istanbul',
        room: 8,
        bedroom: 2,
        pool: 'No',
        bath: 2,
        price: 100000,
        type: 'Villa',
        size: 150,
        photo: 'https://foyr.com/learn/wp-content/uploads/2019/01/best-interior-design-tips.jpg',
    },
    {
        id: 5,
        title: 'The standard chunk of Lorem Ipsum used since the',
        description: 'It is a long established fact that a reader will be distracted by',
        name: 'Deneme5',
        city: 'Istanbul',
        room: 8,
        bedroom: 2,
        bath: 2,
        pool: 'Shared',
        price: 100000,
        type: 'Villa',
        size: 150,
        photo: 'https://www.bankrate.com/2020/09/10120654/How_to_buy_house_at_auction.jpg?auto=webp&optimize=high&crop=16:9',
    },
]


const PropertyDetails = () => {
    return (
        <div>
            <Navbar />
            <Container maxWidth="lg">
                <Grid container alignItems="center" justifyContent="center" sx={{ marginTop: 12}}> 
                    <Carousel sx= {{ width: 800, height: 500}} navButtonsAlwaysVisible >
                        {properties.map((property) => (
                            <Card>
                                <Grid style={{ display:'flex', justifyContent:'center' }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: '100%', height: 450}}
                                        image={property.photo}
                                        alt={property.name}
                                        key={property.id}
                                    />
                                </Grid>
                            </Card>
                        ))}
                    </Carousel>
                </Grid>
                <Grid alignItems="center" justifyContent="center" sx={{ marginLeft: 5, marginRight: 5}}>
                    <Grid item>
                        <PropertyInformation propertyInfo={properties[0]} title="Overview"/>
                    </Grid>
                    <Grid item sx={{ marginTop: 3}}>
                        <PropertyInformation propertyInfo={properties[0]} title="Property Features"/>
                    </Grid>
                </Grid>
                <Footer 
                    title="Footer"
                    description="Something here to give the footer a purpose!"
                />
            </Container>
        </div>
    )
}

export default PropertyDetails;