import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, Button } from '@mui/material';
import Properties from '../components/Properties';
import AuthNavbar from '../components/AuthNavbar';
import Footer from '../components/Footer';
import QueryInput from '../components/QueryInput';
import NoAuthNavbar from '../components/NoAuthNavbar';
import { useSession } from 'next-auth/react'

const list = [
    {
        id: 1,
        title: 'New Build Triplex Villas with Private Pool in Beylikduzu',
        description: 'The complex close to the sea is located in Beylikduzu, Istanbul. The complex is situated on a 6400 sqm land area and consists of 12 detached villas.',
        name: 'Deneme1',
        city: 'Istanbul',
        room: 3,
        bedroom: 2,
        bath: 2,
        price: 100000,
        type: 'Villa',
        size: 150,
        photo: 'https://media.istockphoto.com/photos/brown-two-story-all-american-home-picture-id1158713117?k=20&m=1158713117&s=612x612&w=0&h=s_aoDM4KNoixI9qBLmJOBPMccoWsC11zxuBGGgFRiKY=',
    },
    {
        id: 2,
        title: 'Houses in Tranquil Place Intertwined with Nature',
        description: 'Luxury houses for sale in Tuzla, Istanbul built using durable and high-quality materials are suitable for citizenship applications and investment.',
        name: 'Deneme2',
        city: 'Istanbul',
        room: 5,
        bedroom: 2,
        bath: 2,
        price: 100000,
        type: 'Villa',
        size: 150,
        photo: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg',
    },
    {
        id: 3,
        title: 'Well Located Investment Building in Kadikoy',
        description: 'The brand new building is located in the Osmanaga Neighborhood in Kadikoy, Istanbul Anatolia built using durable and high-quality materials.',
        name: 'Deneme3',
        city: 'Istanbul',
        room: 8,
        bedroom: 2,
        bath: 2,
        price: 100000,
        type: 'Villa',
        size: 150,
        photo: 'https://www.realestate.com.au/blog/images/2000x1500-fit,progressive/2021/11/25163709/1.jpg',
    },
    {
        id: 4,
        title: 'Splendid Villa in Istanbul Kurtkoy Neighbourhood',
        description: 'Villa for sale in Pendik İstanbul is within easy reach of the Aydos forest, hiking parks, and Sabiha Gokcen Airport. The splendid villa is close to all daily amenities.',
        name: 'Deneme4',
        city: 'Istanbul',
        room: 8,
        bedroom: 2,
        bath: 2,
        price: 100000,
        type: 'Villa',
        size: 150,
        photo: 'https://www.montgomeryhomes.com.au/wp-content/uploads/2021/10/Cayman-287-Display-Home-New-Lambton.jpg',
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
        price: 100000,
        type: 'Villa',
        size: 150,
        photo: 'https://www.bankrate.com/2020/09/10120654/How_to_buy_house_at_auction.jpg?auto=webp&optimize=high&crop=16:9',
    },
]

const cityList = [
    'İstanbul',
    'İzmir',
    'Antalya',
    'Rize',
    'Muğla',
    'Çanakkale',
    'Ankara',
    'Edirne',
];

const typeList = [
    'Apartment',
    'Villa',
    'Bungalow',
    'Penthouse',
];

const priceList = [
    'All',
    '0 - 100.000',
    '100.000 - 200.000',
    '200.000 - 300.000',
    '300.000 - 400.000',
    '400.000 - 500.000',
    '500.000 +',
];

const Main = () => {
    const { data: session, status } = useSession()

    useEffect(() => {
        console.log(status)
    })
    
    return (
        <>
            <div>
                {status === 'unauthenticated' ? <NoAuthNavbar page="main" /> : <AuthNavbar />}
                <Card sx={{ display: 'flex', backgroundColor: '#f5f5f5', boxShadow: 'none', height: 100}}>
                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid item sx={{ marginTop: 1 }} xs={3}>
                                <Grid>
                                    <Typography sx={{ fontFamily: 'Raleway', fontSize: 32, color: '#424242'}}>Find Your Ideal</Typography>
                                    <Typography sx={{ fontFamily: 'Raleway', fontSize: 25, color: '#424242'}}>Home & Investment</Typography>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ marginTop: 2 }}>
                                <Grid container>
                                    <Grid item>
                                    <QueryInput type="checkBox" queryName="City" options={cityList}/>
                                    </Grid>
                                    <Grid item>
                                        <QueryInput type="checkBox" queryName="Type" options={typeList}/>
                                    </Grid>
                                    <Grid item>
                                        <QueryInput type="input" queryName="Price" options={priceList}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ margin: 1, marginTop: 4}}>
                                <Button sx={{ backgroundColor: '#5c6bc0', color: 'white', width: 100, height: 40, ':hover': { bgcolor: '#3949ab'}, textTransform: 'none', fontSize: 16 }}>Search</Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Card>
                <Container maxWidth="lg" sx={{ marginTop: 3}}>
                    <Grid container spacing={4}>
                        {list.map((list) => (
                            <Properties key={list.id} post={list} />
                        ))}
                    </Grid>
                    <Footer contactTitle="Contact Us" contactInfo="r_estate@gmail.com"/>
                </Container>
            </div>
            :
            <Grid container justifyContent="center" sx={{ marginTop: 35 }}>
                <Typography sx={{ fontSize: 30}}>Loading ...</Typography>
            </Grid>
        </>
    )
}

export default Main;

