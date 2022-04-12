import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import FormInput from "../components/FormInput";
import Navbar from "../components/Navbar";

const SellProperty = () => {

    const { handleSubmit, control } = useForm({
        // resolver: yupResolver(Schema),
    });

    const onSubmit = () => {

    }

    return (
        <div>
            <Navbar />
            <Card sx={{ marginTop: 12, display: 'flex', backgroundColor: '#eeeeee', boxShadow: 'none', height: 80}}>
                <Container maxWidth="md">
                    <Grid container>
                            <Grid item sx={{ marginTop: 2 }} xs={10}>
                                <Grid>
                                    <Typography sx={{ fontFamily: 'Raleway', fontSize: 30, color: '#424242'}}>Mülk satışı için öncelikle tapu kontrolü yapmalısınız</Typography>
                                </Grid>
                            </Grid>
                    </Grid>
                </Container>
            </Card>
            <Container maxWidth="md" sx={{ marginBottom: 10 }}>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: 5
                    }}
                >
                    <Box noValidate sx={{ mt: 1 }}>
                        <form
                            noValidate
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <Grid container spacing={2} sx={{ maxWidth: 600}}>
                                <Grid item xs={12}>
                                    <Controller
                                        name='tcno'
                                        control={control}
                                        render={(props) => (
                                            <FormInput {...props} required label="TC Kimlik Numarası"/>
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Controller
                                        name='propertyNo'
                                        control={control}
                                        render={(props) => (
                                            <FormInput {...props} required label="Taşınmaz Mülk Numarası"/>
                                        )}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container sx={{ marginTop: 3}}>
                                <Link href="/sell-property-detail">
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ width: 200, mt: 3, mb: 2 , backgroundColor: "#455a64", ':hover': { bgcolor: '#263238'}, textTransform: 'none', fontSize: 15}}
                                    >
                                        Kontrol Et
                                    </Button>
                                </Link>
                            </Grid>
                        </form>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default SellProperty;