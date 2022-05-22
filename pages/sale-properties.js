import { Grid, Card, Container, Typography } from "@mui/material";
import AuthNavbar from "../components/AuthNavbar";
import UserProperty from "../components/UserProperty";
import Footer from "../components/Footer";
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react'


const properties = [
    {
        location: "İstanbul/Beylikdüzü",
        price: "100.000",
        number: "5032",
        onSale: true,
        image: "https://media.architecturaldigest.com/photos/56d9ef71ce4f38152ccc96f4/2:1/w_5130,h_2565,c_limit/designers-homes-02.jpg",
    },
    {
        location: "İstanbul/Beşiktaş",
        price: "300.000",
        number: "5035",
        onSale: false,
        image: "https://media.architecturaldigest.com/photos/571e97c5741fcddb16b559c9/2:1/w_5127,h_2563,c_limit/modernist-decor-inspiration-01.jpg",
    }
]


const SaleProperties = () => {
    const router = useRouter()

    const { data: session, status } = useSession({
        required: true,
		onUnauthenticated: () => {
            setTimeout(() => {
                router.push('/')
            }, 3000)
		},
    })

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
                                    <Typography sx={{ fontFamily: 'Raleway', fontSize: 30, color: '#424242'}}>My Properties</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Card>
                <Container maxWidth="lg" sx={{ marginBottom: 10 }}>
                    {properties.map((property) => (
                        <UserProperty property={property} />
                    ))}
                </Container>
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