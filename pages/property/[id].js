import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { Button, CardContent, Container, Typography, CardMedia, Card, Grid } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import AuthNavbar from "../../components/AuthNavbar";
import Carousel from 'react-material-ui-carousel'
import Footer from '../../components/Footer';
import PropertyInformation from '../../components/PropertyInformation';
import NoAuthNavbar from '../../components/NoAuthNavbar';
import { useSession } from 'next-auth/react'
import { ethers, BigNumber } from 'ethers';
import { useMarketplace } from '../../context/MarketplaceContext';
import { useProperty } from '../../context/PropertyContext';
import axios from 'axios';
import { ipfs } from '../../util/ipfsUtil';
import { useAccount, useBalance, useSigner } from 'wagmi';

const PropertyDetails = () => {
    const [nft, setNft] = useState(null);
    const [loading, setLoading] = useState(false);
    const { marketplace } = useMarketplace();
    const { propertyContract } = useProperty();

    const marketplaceCommission = "1";
    const governmentCommission = "2";

    const router = useRouter();
    const { id } = router.query;

    const { data: session, status } = useSession();
    const { data: signer } = useSigner();
    const { data: account } = useAccount();
    const { data: balance } = useBalance({ addressOrName: account?.address });
    
    useEffect(() => {
        if (!marketplace || !id) return;
        loadNFT();
    }, [id, marketplace])

    const loadNFT = async () => {
        const data = await marketplace.getSpecificListing(id);
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
            images: metadata.data.images,
            seller: data.seller,
            owner: data.owner,
            tokenId: data.tokenId.toNumber(),
            listingId: data.listingId.toNumber(),
            price: data.price,
        };
        setNft(property);
    }

    const buy = async () => {
        setLoading(true);

        if (!balance) {
            throw Error("Wallet not connected");
        };
        if (!nft) return;

        const mCommission = nft.price.mul(BigNumber.from(marketplaceCommission)).div(BigNumber.from("100"));
        const gCommission = nft.price.mul(BigNumber.from(governmentCommission)).div(BigNumber.from("100"));

        const finalPrice = nft.price.add(mCommission.add(gCommission));
        console.log(ethers.utils.formatEther(finalPrice));

        const calculatedFinalPrice = ethers.utils.formatEther(finalPrice).toString();

        const tx = await marketplace.buy(nft.tokenId, { value: ethers.utils.parseUnits(calculatedFinalPrice, "ether"), gasLimit: 1000000 });
        await tx.wait();
        router.push("/main");
        setLoading(false);
    }


    if (status === 'loading' || !nft) {
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
                                <Typography sx={{ fontFamily: 'Raleway', fontSize: 30, color: '#424242'}}>{nft.title}</Typography>
                            </Grid>
                            <Grid container sx={{ marginTop: 1}}>         
                                <Typography sx={{ fontFamily: 'Raleway', fontSize: 25}}>Price: </Typography>
                                <Typography sx={{ fontFamily: 'Raleway', fontSize: 35, color:'#c62828', marginLeft: 2, marginTop: -1}}>{ethers.utils.formatEther(nft.price)} ETH</Typography>
                            </Grid>
                        </Grid>
                        {status === "unauthenticated" ? 
                            <Grid /> 
                            :
                            <Grid item sx={{ marginTop: 3, marginRight: 5}} xs={2}> 
                                {account ? 
                                    <>
                                        {!loading ? 
                                            <Button 
                                                onClick={() => buy()}
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
                                        :
                                            <LoadingButton
                                                loading
                                                loadingPosition="start"
                                                startIcon={<SaveIcon />}
                                                variant="outlined"
                                                sx={{ width: 180, textTransform: 'none', fontSize: 15, mb: 2 }}
                                                >
                                                Loading Process
                                            </LoadingButton>
                                        }
                                    </>
                                :
                                    <>
                                        <Button 
                                            disabled
                                            sx={{ 
                                                backgroundColor: '#bdbdbd',
                                                width: 160, 
                                                height: 40, 
                                                fontSize: 16,  
                                                textTransform: 'none'
                                            }}
                                        >
                                            Buy Property
                                        </Button>
                                        <Typography sx={{ fontSize: 13, marginTop: 0.5, color: "#9e9e9e"}}>
                                            You should connect wallet
                                        </Typography>   
                                    </>         
                                }
                            </Grid>
                        }
                    </Grid>
                </Card>
                <Container maxWidth="lg">
                    <Grid container alignItems="center" justifyContent="center"> 
                        <Carousel sx= {{ width: 900, height: 500}} navButtonsAlwaysVisible >
                            {nft.images.map((image, index) => (
                                <Card key={index}>
                                    <Grid style={{ display:'flex', justifyContent:'center' }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: '100%', height: 430}}
                                            image={ipfs(image)}
                                        />
                                    </Grid>
                                </Card>
                            ))}
                        </Carousel>
                    </Grid>
                    <Grid sx={{ marginLeft: 5, marginRight: 5}}>
                        <Grid item>
                            <PropertyInformation propertyInfo={nft} title="Overview"/>
                        </Grid>
                        <Grid item sx={{ marginTop: 3}}>
                            <PropertyInformation propertyInfo={nft} title="Property Features"/>
                        </Grid>
                        <Grid item sx={{ marginTop: 3}}>
                            <Card sx={{ backgroundColor: '#f5f5f5' }}>
                                <CardContent sx={{ marginLeft: 2, marginTop: 1}}>
                                    <Typography sx={{ fontSize: 25, fontFamily: 'Raleway'}}>About The Property</Typography>
                                </CardContent>
                                <CardContent sx={{ marginLeft: 2, marginTop: -1 }}>
                                    <Typography sx={{ fontSize: 16}}>
                                        {nft.detail}
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