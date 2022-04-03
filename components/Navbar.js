import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Box } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';

const theme = createTheme({
  typography: {
    "fontFamily":"Roboto",
    "fontSize": 13,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
});

function Navbar(props) {


  return (
    <Box sx={{ flexGrow: 1, margin: 10}}>
        <AppBar position="fixed" style={{ backgroundColor:"#455a64"}} >
          <Toolbar>
            <Grid container sx={{ width: 150}}>
              <ThemeProvider theme={theme}>
                <Typography variant="h5" component="div">
                    R - ESTATE
                </Typography>
              </ThemeProvider>
            </Grid>
            <Grid
                justify="space-between"
                container 
                spacing={1}
                justifyContent="center"
            >
                <Grid item sx={{ marginLeft: 5}}>
                    <Link href="/main" style={{ textDecoration: 'none', color: 'white'}}>
                      <Button variant="inherit">Home</Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="/profile" style={{ textDecoration: 'none', color: 'white', }}>
                      <Button variant="inherit">Profile</Button>
                    </Link>
                </Grid> 
                <Grid item>
                    <Link href="/sale-properties" style={{ textDecoration: 'none', color: 'white', }}>
                      <Button variant="inherit">Sale Properties</Button>
                    </Link>
                </Grid>    
                <Grid item>
                    <Link href="/sell-property" style={{ textDecoration: 'none', color: 'white', }}>
                      <Button variant="inherit">Sell Property</Button>
                    </Link>
                </Grid>          
            </Grid>
            <Button startIcon={<LogoutIcon />} sx={{ marginLeft: 2}} variant="inherit" href="/">
              Logout
            </Button>       
          </Toolbar>
        </AppBar>
      </Box>
  );
}

export default Navbar;