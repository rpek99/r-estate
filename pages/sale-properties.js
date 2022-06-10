import { Grid, Card, Container, Typography } from "@mui/material";
import AuthNavbar from "../components/AuthNavbar";
import UserProperty from "../components/UserProperty";
import Footer from "../components/Footer";
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react'
import { useAccount, useSigner } from 'wagmi';
import { useMarketplace } from "../context/MarketplaceContext";
import { useProperty } from "../context/PropertyContext";
import { useEffect, useState } from "react";
import axios from "axios";

const SaleProperties = () => {
    const [NFTs, setNFTs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [iswalletConnected, setIsWalletConnected] = useState(true);

    const router = useRouter();

    const { marketplace } = useMarketplace();
    const { propertyContract } = useProperty();

    const { data: account } = useAccount();

    const { data: session, status } = useSession({
        required: true,
		onUnauthenticated: () => {
            setTimeout(() => {
                router.push('/')
            }, 3000)
		},
    })

    useEffect(() => {
        if (!marketplace || !account) {
            setIsWalletConnected(false);
        }
        if ( account ) {
            setIsWalletConnected(true);
        }
        loadSellerNFTs();
    }, [marketplace, account])

    const loadSellerNFTs = async () => {
        const data = await marketplace.getListingsCreated();
        const items = await Promise.all(
            data.map(async (nft) => {
                const tokenURI = await propertyContract.tokenURI(nft?.tokenId);
                const metadata = await axios.get(`https://ipfs.io/ipfs/${tokenURI}`);
                const property = {
                    location: metadata.data.location,
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
                <Typography sx={{ fontSize: 30, color: "#424242"}}>Fetching Data...</Typography>
            </Grid>
        )
    }

    return (
        <>
            {session ?   
            <div>
                <AuthNavbar />
                <Card sx={{ marginTop: 12, display: 'flex', backgroundColor: '#eeeeee', boxShadow: 'none', height: 80}}>
                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid item sx={{ marginTop: 2 }} xs={3}>
                                <Grid>
                                    <Typography sx={{ fontFamily: 'Raleway', fontSize: 30, color: '#424242'}}>Listed Properties</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Card>
                {iswalletConnected ? 
                    <>
                        {NFTs.length > 0 ?
                            <Container maxWidth="lg" sx={{ marginBottom: 10 }}>
                                {NFTs.map((nft) => (
                                    <UserProperty property={nft} />
                                ))}
                            </Container>
                        :
                            <Grid container justifyContent="center" sx={{ marginTop: 20, marginBottom: 10 }}>
                                <Typography sx={{ fontSize: 30, color: "#424242"}}>There is no any property that you listed...</Typography>
                            </Grid>
                        }
                    </>
                :
                    <Grid container justifyContent="center" sx={{ marginTop: 20, marginBottom: 10 }}>
                        <Typography sx={{ fontSize: 30, color: "#424242"}}>Please connect wallet...</Typography>
                    </Grid>
                }
                <Footer 
                    contactTitle="Contact Us" 
                    contactInfo="r_estate@gmail.com"
                />
            </div>
            : 
            <Grid container justifyContent="center" sx={{ marginTop: 35 }}>
                <Typography sx={{ fontSize: 30}}>Loading ...</Typography>
            </Grid>
            } 
        </>
    )
}

export default SaleProperties;