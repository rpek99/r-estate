import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, CardContent, Container, Typography, CardMedia, Card, Grid } from "@mui/material";
import AuthNavbar from "../../components/AuthNavbar";
import Carousel from 'react-material-ui-carousel'
import Footer from '../../components/Footer';
import PropertyInformation from '../../components/PropertyInformation';
import NoAuthNavbar from '../../components/NoAuthNavbar';
import { useSession } from 'next-auth/react'


const properties = [
    {
        id: 1,
        owner: {
            name: "Rüstem",
            surname: "Pek",
            phone: "(+90) 535 539 75 05",
            email: "rpek@gmail.com"
        },
        title: 'Modern-designed homes in Maltepe with sea views',
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
                'the Anatolian side of Istanbul and are available today at bargain prices not to miss out on.',
        about: 'Constructed by a quality developer ensuring timely delivery,'+
                'this new project is built within a plot of land sized at 21,800m2.'+
                'The site consists of four blocks in total and offers 260 homes in sizes'+
                'ranging from one four bedrooms. A plethora of social facilities are available and'+
                'include a swimming pool, gardens, and areas for children. The completion date for'+
                'owners to move in has been set for June 2023.'+
                'Suitable for year round living and within a matter of minutes from amenities and necessities,'+
                'these apartments rise in Maltepe on the Anatolian side of Istanbul. A nearby Metro station makes'+
                'it easy to commute and move around the city, while access to highways is easy for those using'+
                'their own vehicles. Maltepe is a developing area and is home to universities, hospitals,'+
                'shopping malls, and everything else needed within a ten minute radius.'
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

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


const PropertyDetails = () => {
    const { data: session, status } = useSession()

    if (status === 'loading') {
        return (
            <Grid container justifyContent="center" sx={{ marginTop: 35 }}>
                <Typography sx={{ fontSize: 30}}>Loading ...</Typography>
            </Grid>
        )
    }

    return (
        <>
            <div>
                {status === 'unauthenticated' ? <NoAuthNavbar page="main" /> : <AuthNavbar />}
                <Card sx={{ display: 'flex', backgroundColor: '#f5f5f5', boxShadow: 'none', marginBottom: 3}}>
                    <Grid container justifyContent="space-between" spacing={2}>
                        <Grid item sx={{ marginLeft: 10 }} xs={8}>
                            <Grid>
                                <Typography sx={{ fontFamily: 'Raleway', fontSize: 30, color: '#424242'}}>{properties[0].title}</Typography>
                            </Grid>
                            <Grid container sx={{ marginTop: 1}}>         
                                <Typography sx={{ fontFamily: 'Raleway', fontSize: 25}}>Price: </Typography>
                                <Typography sx={{ fontFamily: 'Raleway', fontSize: 35, color:'#c62828', marginLeft: 2, marginTop: -1}}>{formatter.format(properties[0].price)}</Typography>
                            </Grid>
                        </Grid>
                        {status === "unauthenticated" ? 
                            <Grid /> 
                            :
                            <Grid item sx={{ marginTop: 3, marginRight: 5}} xs={2}>
                                <Link href="/main">
                                    <Button 
                                        sx={{ 
                                            backgroundColor: '#d32f2f',
                                            color: 'white', 
                                            width: 160, 
                                            height: 40, 
                                            fontSize: 16, 
                                            ':hover': { bgcolor: '#b71c1c'}, 
                                            textTransform: 'none'
                                        }}
                                    >
                                        Buy Property
                                    </Button>
                                </Link>
                            </Grid>
                        }
                    </Grid>
                </Card>
                <Container maxWidth="lg">
                    <Grid container alignItems="center" justifyContent="center"> 
                        <Carousel sx= {{ width: 900, height: 500}} navButtonsAlwaysVisible >
                            {properties.map((property) => (
                                <Card key={property.id}>
                                    <Grid style={{ display:'flex', justifyContent:'center' }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: '100%', height: 430}}
                                            image={property.photo}
                                            alt={property.name}
                                        />
                                    </Grid>
                                </Card>
                            ))}
                        </Carousel>
                    </Grid>
                    <Grid sx={{ marginLeft: 5, marginRight: 5}}>
                        <Grid item>
                            <PropertyInformation propertyInfo={properties[0]} title="Overview"/>
                        </Grid>
                        <Grid item sx={{ marginTop: 3}}>
                            <PropertyInformation propertyInfo={properties[0]} title="Property Features"/>
                        </Grid>
                        <Grid item sx={{ marginTop: 3}}>
                            <Card sx={{ backgroundColor: '#f5f5f5' }}>
                                <CardContent sx={{ marginLeft: 2, marginTop: 1}}>
                                    <Typography sx={{ fontSize: 25, fontFamily: 'Raleway'}}>About The Property</Typography>
                                </CardContent>
                                <CardContent sx={{ marginLeft: 2, marginTop: -1 }}>
                                    <Typography sx={{ fontSize: 16}}>
                                        {properties[0].about}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid sx={{ marginTop: 3}}>
                            <Card sx={{ backgroundColor: '#f5f5f5' }}>
                                <CardContent sx={{ marginLeft: 2, marginTop: 1}}>
                                    <Typography sx={{ fontSize: 25, fontFamily: 'Raleway'}}>Advertiser Contact</Typography>
                                </CardContent>
                                <CardContent sx={{ marginLeft: 2, marginTop: -5 }}>
                                    <Typography sx={{ fontSize: 16, marginTop: 5}}>Name&Surname: {properties[0].owner.name} {properties[0].owner.surname}</Typography>
                                    <Typography sx={{ fontSize: 16, marginTop: 2}}>Email Address: {properties[0].owner.email}</Typography>
                                    <Typography sx={{ fontSize: 16, marginTop: 2}}>Phone Number: {properties[0].owner.phone}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Footer 
                        contactTitle="Contact Us"
                        contactInfo="r_estate@gmail.com"
                    />
                </Container>
            </div>
        </>
    )
}

export default PropertyDetails;