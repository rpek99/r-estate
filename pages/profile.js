import { React, useState, useEffect } from 'react';
import { Card, CardContent, Container, Grid, Typography, Box, Button, Divider } from "@mui/material";
import Navbar from "../components/Navbar";
import axios from "axios";


const Profile = () => {

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobilePhone, setMobilePhone] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    useEffect(() => {
        axios
            .get("user/getUser?userId=" +localStorage.getItem("currentUser"))
            .then((res) => {
                setEmail(res.data.email)
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
                setMobilePhone(res.data.mobilePhone);
                setPhoneNumber(`(${mobilePhone.slice(0,3)}) ${mobilePhone.slice(3,6)} ${mobilePhone.slice(6,8)} ${mobilePhone.slice(8.10)}`);
            })
    });

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
                                <Typography sx={{ marginTop: 5, fontSize: "50px", color: "white"}}>
                                    {firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()}
                                </Typography>
                            </Grid>
                        </Box>
                        <Card sx={{ backgroundColor: "#616161", marginTop: 5, width: 750, height: 150, boxShadow: "0" }}>
                            <CardContent sx={{ marginLeft: 2, marginTop: 2 }}>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Typography sx={{ fontSize: 18, color: 'white'}}>Name & Surname</Typography>
                                        <Typography sx={{ fontSize: 15, color: 'white', marginTop: 2 }}>{firstName} {lastName}</Typography>
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
                                        <Typography sx={{ fontSize: 15, color: 'white', marginTop: 2 }}>{email}</Typography>
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
                                        <Typography sx={{ fontSize: 15, color: 'white', marginTop: 2 }}>{phoneNumber}</Typography>
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
                                        <Typography sx={{ textDecoration: 'underline', fontSize: 15, color: 'white', marginTop: 2}}>none</Typography>
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