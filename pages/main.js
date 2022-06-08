import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, Button } from '@mui/material';
import Properties from '../components/Properties';
import AuthNavbar from '../components/AuthNavbar';
import Footer from '../components/Footer';
import QueryInput from '../components/QueryInput';
import NoAuthNavbar from '../components/NoAuthNavbar';
import { useSession } from 'next-auth/react'
import { useProperty } from '../context/PropertyContext';
import axios from 'axios';
import { useMarketplace } from '../context/MarketplaceContext';


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
    const [NFTs, setNFTs] = useState([]);

    const [loading, setLoading] = useState(true);
    const { marketplace } = useMarketplace();
    const { propertyContract } = useProperty();

    const { data: session, status } = useSession();

    useEffect(() => {
        if (!marketplace) return;
        loadNFTs();
    }, [marketplace])

    const loadNFTs = async () => {
        const data = await marketplace.getAllListings();
        console.log("all listings ", data);
        const items = await Promise.all(
            data.map(async (nft) => {
                const tokenURI = await propertyContract.tokenURI(nft?.tokenId);
                const metadata = await axios.get(`https://ipfs.io/ipfs/${tokenURI}`);
                const property = {
                    areaSize: metadata.data.areaSize,
                    bathroomNum: metadata.data.bathroomNum,
                    bedroomNum: metadata.data.bedroomNum,
                    detail: metadata.data.detail,
                    location: metadata.data.location,
                    overview: metadata.data.overview,
                    pool: metadata.data.pool,
                    propertyType: metadata.data.propertyType,
                    title: metadata.data.title,
                    images: metadata.data.images,
                    seller: nft.seller,
                    owner: nft.owner,
                    tokenId: nft.tokenId.toNumber(),
                    listingId: nft.listingId.toNumber(),
                    price: nft.price,
                };
                return property;
            })
        );
        setNFTs(items);
        setLoading(false);
    }

    if (loading) {
        return (
            <Grid container justifyContent="center" sx={{ marginTop: 35 }}>
                <Typography sx={{ fontSize: 30}}>Fetching Data...</Typography>
            </Grid>
        )
    }

    return (
        <>
            <div>
                {status === 'unauthenticated' ? <NoAuthNavbar page="main" /> : <AuthNavbar />}
                <Card sx={{ display: 'flex', backgroundColor: '#f5f5f5', boxShadow: 'none', height: 100 }}>
                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid item sx={{ marginTop: 1 }} xs={3}>
                                <Grid>
                                    <Typography sx={{ fontFamily: 'Raleway', fontSize: 32, color: '#424242' }}>Find Your Ideal</Typography>
                                    <Typography sx={{ fontFamily: 'Raleway', fontSize: 25, color: '#424242' }}>Home & Investment</Typography>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ marginTop: 2 }}>
                                <Grid container>
                                    <Grid item>
                                        <QueryInput type="checkBox" queryName="Location" options={cityList} />
                                    </Grid>
                                    <Grid item>
                                        <QueryInput type="checkBox" queryName="Type" options={typeList} />
                                    </Grid>
                                    <Grid item>
                                        <QueryInput type="input" queryName="Price" options={priceList} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ margin: 1, marginTop: 4 }}>
                                <Button sx={{ backgroundColor: '#5c6bc0', color: 'white', width: 100, height: 40, ':hover': { bgcolor: '#3949ab' }, textTransform: 'none', fontSize: 16 }}>Search</Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Card>
                <Container maxWidth="lg" sx={{ marginTop: 3 }}>
                    <Grid container spacing={4}>
                        {NFTs.map((nft) => (
                            <Properties key={nft.listingId} post={nft} />
                        ))}
                    </Grid>
                    <Footer contactTitle="Contact Us" contactInfo="r_estate@gmail.com" />
                </Container>
            </div>
        </>
    )
}

export default Main;

