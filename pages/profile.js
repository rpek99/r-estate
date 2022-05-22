import { React, useEffect } from 'react';
import { Card, CardContent, Container, Grid, Typography, Box, Divider } from "@mui/material";
import AuthNavbar from "../components/AuthNavbar";
import { useSession } from 'next-auth/react'
import PersonIcon from '@mui/icons-material/Person';
import AuthError from './auth-error';
import { useRouter } from 'next/router';


const Profile = () => {

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
                                <PersonIcon sx={{ color: 'white', marginTop: 4, fontSize: 80 }}/>
                            </Grid>
                        </Box>
                        <Card sx={{ backgroundColor: "#616161", marginTop: 5, width: 750, height: 150, boxShadow: "0" }}>
                            <CardContent sx={{ marginLeft: 2, marginTop: 2 }}>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Typography sx={{ fontSize: 18, color: 'white'}}>Name & Surname</Typography>
                                        <Typography sx={{ fontSize: 15, color: 'white', marginTop: 2 }}>{session.user.name}</Typography>
                                    </Grid> 
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card sx={{ backgroundColor: "#616161", marginTop: 3, width: 750, height: 150, boxShadow: "0"}}>
                        <CardContent sx={{ marginLeft: 2, marginTop: 2 }}>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Typography sx={{ fontSize: 18, color: 'white'}}>Email</Typography>
                                        <Typography sx={{ fontSize: 15, color: 'white', marginTop: 2 }}>{session.user.name}</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card sx={{ backgroundColor: "#616161", marginTop: 3, width: 750, height: 200, boxShadow: "0"}}>
                        <CardContent sx={{ marginLeft: 2, marginTop: 2 }}>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Typography sx={{ fontSize: 18, color: 'white', marginTop: 2}}>Wallet Address</Typography>
                                        <Divider sx={{ m: 1, width: 200, marginLeft: 0, backgroundColor: "white" }}/>
                                        <Typography sx={{ textDecoration: 'underline', fontSize: 15, color: 'white', marginTop: 2}}>none</Typography>
                                    </Grid>   
                                </Grid>
                            </CardContent>
                        </Card>
                    </Box>
                </Container>
            </Card>
        </div>
        : 
        <Grid container justifyContent="center" sx={{ marginTop: 35 }}>
            <Typography sx={{ fontSize: 30}}>Loading ...</Typography>
        </Grid>
        }
      </>
    )
}

export default Profile;