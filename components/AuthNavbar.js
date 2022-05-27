import { React, useEffect, useState } from 'react';
import Link from 'next/link';
import { Toolbar, Button, AppBar, Grid, Box, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { ethers } from 'ethers';


const AuthNavbar = () => {

  const [ walletAddress, setWalletAddress ] = useState("");
  const [ walletAddressLength, setWalletAddressLength ] = useState(0);

  const router = useRouter()

  const handleSingOut = async () => {
      const data = await signOut({ redirect: false, callbackUrl: '/'})
      router.push(data.url)
  }

  const requestAccount = async () => {
    // check if MetaMask extension exist
    if(window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        setWalletAddressLength(accounts[0].length);
        localStorage.setItem("currentWallet", walletAddress);
        console.log(walletAddress);
      } catch (error) {
        console.log('Error connecting...')
      }
    }
  }

  useEffect(() => {
    requestAccount();
  })

  const connectWallet = async () => {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
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
            {walletAddress ? 
              <Typography>
                {walletAddress.slice(0, 5) + "...." + walletAddress.slice(walletAddressLength - 3, walletAddressLength)}
              </Typography> 
              :
              <Button onClick={connectWallet} sx={{ textTransform: 'none', backgroundColor: '#e53935', color: 'white', ':hover': { bgcolor: '#a02725'}, width: 180 }}>
                Connect Wallet
              </Button>
            }
            <Button startIcon={<LogoutIcon />} onClick={handleSingOut} sx={{ marginLeft: 4}} variant="inherit">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
  );
}

export default AuthNavbar;