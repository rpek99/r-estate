import { Grid, Card, Container, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import UserProperty from "../components/UserProperty";
import Footer from "../components/Footer";


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
    return (
        <div>
            <Navbar />
            <Card sx={{ marginTop: 12, display: 'flex', backgroundColor: '#f5f5f5', boxShadow: 'none', height: 80}}>
                <Container maxWidth="lg">
                    <Grid container>
                            <Grid item sx={{ marginTop: 1 }} xs={3}>
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
    )
}

export default SaleProperties;