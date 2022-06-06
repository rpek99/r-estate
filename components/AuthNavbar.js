import { React } from 'react';
import Link from 'next/link';
import { Toolbar, Button, AppBar, Grid, Box, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { useAccount, useConnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'


const AuthNavbar = () => {
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { data: userData } = useAccount();

  const router = useRouter()

  const handleSingOut = async () => {
      const data = await signOut({ redirect: false, callbackUrl: '/'})
      router.push(data.url)
  }

  
  return (
    <Box sx={{ margin: 10}}>
        <AppBar position="fixed" style={{ backgroundColor:"#455a64"}} >
          <Toolbar>
            <Box 
              component="img" 
              src="/logo2.png" 
              sx={{ width: 180, height: 70, marginRight: 10 }}
            />
            <Grid
                justify="space-between"
                container 
                spacing={2}
                justifyContent="center"
            >
                <Grid item>
                    <Link href="/main" style={{ textDecoration: 'none', color: 'white'}}>
                      <Button variant="inherit" sx={{ textTransform: 'none', fontSize: 15}}>Home</Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="/profile" style={{ textDecoration: 'none', color: 'white', }}>
                      <Button variant="inherit" sx={{ textTransform: 'none', fontSize: 15}}>Profile</Button>
                    </Link>
                </Grid> 
                <Grid item>
                    <Link href="/sale-properties" style={{ textDecoration: 'none', color: 'white', }}>
                      <Button variant="inherit" sx={{ textTransform: 'none', fontSize: 15}}>Sale Properties</Button>
                    </Link>
                </Grid>    
                <Grid item>
                    <Link href="/sell-property" style={{ textDecoration: 'none', color: 'white', }}>
                      <Button variant="inherit" sx={{ textTransform: 'none', fontSize: 15}}>Sell Property</Button>
                    </Link>
                </Grid>          
            </Grid>
            {userData ?
              <Typography color="white" sx={{ marginRight: 1 }}>
                {userData.address.slice(0, 5) + "...." + userData.address.slice(userData.address.length - 5, userData.address.length)}
              </Typography>
              :
              <Button
                onClick={() => connect()}
                sx={{
                  backgroundColor: '#37474f',
                  textTransform: 'none',
                  color: 'white',
                  ':hover': { bgcolor: '#546e7a' },
                  width: 180,
                  height: 40
                }}
              >
                Connect Wallet
            </Button>
            }
            <Button startIcon={<LogoutIcon />} onClick={handleSingOut} sx={{ marginLeft: 5 }} variant="inherit">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
  );
}

export default AuthNavbar;


