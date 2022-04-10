import React from 'react';
import { Card, CardContent, Container, Grid, Typography, Box, Button, Divider } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import Navbar from "../components/Navbar";


const user = {
    name: "Rüstem",
    surname: "Pek",
    phoneNumber: "0535 549 75 05",
    email: "rpek@medipol.edu.tr",
    walletAddress: "0x995...fEB95"
}

const Profile = () => {
    return (
        <div>
            <Navbar />
            <Card sx={{ backgroundColor: '#f5f5f5', marginTop: -1}}>
                <Container maxWidth="sm">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            m: 1,
                            marginBottom: 10
                        }}
                    > 
                        <Box sx={{ marginTop: 5, backgroundColor: '#616161', width: 160, height: 160, borderRadius: '50%'}}>
                            <Grid container justifyContent="center" alignItems="center">
                                <PersonIcon sx={{ color: 'white', fontSize: 70, marginTop: 5 }}/>
                            </Grid>
                        </Box>
                        <Card sx={{ backgroundColor: "#616161", marginTop: 5, width: 750, height: 150, boxShadow: "0" }}>
                            <CardContent sx={{ marginLeft: 2, marginTop: 2 }}>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Typography sx={{ fontSize: 18, color: 'white'}}>Name & Surname</Typography>
                                        <Typography sx={{ fontSize: 15, color: 'white', marginTop: 2 }}>{user.name} {user.surname}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button 
                                            sx={{ 
                                                backgroundColor: '#424242',
                                                color: 'white',
                                                m: 2,
                                                width: 80,
                                                fontSize: 15,
                                                textTransform: 'none',
                                                ':hover': { bgcolor: '#212121'}
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card sx={{ backgroundColor: "#616161", marginTop: 3, width: 750, height: 150, boxShadow: "0"}}>
                        <CardContent sx={{ marginLeft: 2, marginTop: 2 }}>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Typography sx={{ fontSize: 18, color: 'white'}}>Email</Typography>
                                        <Typography sx={{ fontSize: 15, color: 'white', marginTop: 2 }}>{user.email}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button 
                                            sx={{ 
                                                backgroundColor: '#424242',
                                                color: 'white',
                                                m: 2,
                                                width: 80,
                                                fontSize: 15,
                                                textTransform: 'none',
                                                ':hover': { bgcolor: '#212121'}
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card sx={{ backgroundColor: "#616161", marginTop: 3, width: 750, height: 150, boxShadow: "0"}}>
                        <CardContent sx={{ marginLeft: 2, marginTop: 2 }}>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Typography sx={{ fontSize: 18, color: 'white'}}>Phone Number</Typography>
                                        <Typography sx={{ fontSize: 15, color: 'white', marginTop: 2 }}>{user.phoneNumber}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button 
                                            sx={{ 
                                                backgroundColor: '#424242',
                                                color: 'white',
                                                m: 2,
                                                width: 80,
                                                fontSize: 15,
                                                textTransform: 'none',
                                                ':hover': { bgcolor: '#212121'}
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card sx={{ backgroundColor: "#616161", marginTop: 3, width: 750, height: 200, boxShadow: "0"}}>
                        <CardContent sx={{ marginLeft: 2, marginTop: 2 }}>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Typography sx={{ fontSize: 18, color: 'white'}}>Connect Wallet</Typography>
                                        <Typography sx={{ fontSize: 15, color: 'white', marginTop: 2}}>Wallet Address</Typography>
                                        <Divider sx={{ m: 1, width: 200, marginLeft: 0, backgroundColor: "white" }}/>
                                        <Typography sx={{ textDecoration: 'underline', fontSize: 15, color: 'white', marginTop: 2}}>{user.walletAddress}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button 
                                            sx={{ 
                                                backgroundColor: '#424242',
                                                color: 'white',
                                                m: 2,
                                                marginTop: 5,
                                                width: 120,
                                                fontSize: 15,
                                                
                                                textTransform: 'none',
                                                ':hover': { bgcolor: '#212121'}
                                            }}
                                        >
                                            Add Wallet
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Box>
                </Container>
            </Card>
        </div>
    )
}

export default Profile;