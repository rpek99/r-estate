import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Button, CardContent, Container, Typography, CardMedia, Card, Grid } from "@mui/material";
import AuthNavbar from "../../components/AuthNavbar";
import Carousel from 'react-material-ui-carousel'
import Footer from '../../components/Footer';
import PropertyInformation from '../../components/PropertyInformation';
import NoAuthNavbar from '../../components/NoAuthNavbar';
import { useSession } from 'next-auth/react'
import { ethers } from 'ethers';
import { useMarketplace } from '../../context/MarketplaceContext';
import { useProperty } from '../../context/PropertyContext';
import axios from 'axios';

const PropertyDetails = () => {
    const [ NFT, setNFT ] = useState({});

    const { marketplace } = useMarketplace();
    const { propertyContract } = useProperty();


    const router = useRouter();
    const { id } = router.query;

    const { data: session, status } = useSession();
    
    useEffect(() => {
        loadNFT();
    }, [])

    const loadNFT = async () => {
        await marketplace.getSpecificListing(id)
            .then((data) => fetchData(data))
            .then((item) => setNFT(item));
    }

    const fetchData = async (data) => {
        const tokenURI = await propertyContract.tokenURI(data.tokenId);
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
            seller: data.seller,
            owner: data.owner,
            tokenId: data.tokenId.toNumber(),
            listingId: data.listingId.toNumber(),
            price: data.price,
        };
        return property;
    }



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
                                <Typography sx={{ fontFamily: 'Raleway', fontSize: 30, color: '#424242'}}>{NFT.title}</Typography>
                            </Grid>
                            <Grid container sx={{ marginTop: 1}}>         
                                <Typography sx={{ fontFamily: 'Raleway', fontSize: 25}}>Price: </Typography>
                                {/* <Typography sx={{ fontFamily: 'Raleway', fontSize: 35, color:'#c62828', marginLeft: 2, marginTop: -1}}>{ethers.utils.formatEther(NFT.price)} ETH</Typography> */}
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
                    {/* <Grid container alignItems="center" justifyContent="center"> 
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
                    </Grid> */}
                    <Grid sx={{ marginLeft: 5, marginRight: 5}}>
                        <Grid item>
                            <PropertyInformation propertyInfo={NFT} title="Overview"/>
                        </Grid>
                        <Grid item sx={{ marginTop: 3}}>
                            <PropertyInformation propertyInfo={NFT} title="Property Features"/>
                        </Grid>
                        <Grid item sx={{ marginTop: 3}}>
                            <Card sx={{ backgroundColor: '#f5f5f5' }}>
                                <CardContent sx={{ marginLeft: 2, marginTop: 1}}>
                                    <Typography sx={{ fontSize: 25, fontFamily: 'Raleway'}}>About The Property</Typography>
                                </CardContent>
                                <CardContent sx={{ marginLeft: 2, marginTop: -1 }}>
                                    <Typography sx={{ fontSize: 16}}>
                                        {NFT.detail}
                                    </Typography>
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