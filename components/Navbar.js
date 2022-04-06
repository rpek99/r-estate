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
    <Box sx={{ margin: 10}}>
        <AppBar position="fixed" style={{ backgroundColor:"#455a64"}} >
          <Toolbar>
            <Box 
              component="img" 
              src="https://imgyukle.com/f/2022/04/06/EAjFMI.png" 
              sx={{ width: 180, height: 70 }}
              
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
            <Button startIcon={<LogoutIcon />} sx={{ marginLeft: 2}} variant="inherit" href="/">
              Logout
            </Button>       
          </Toolbar>
        </AppBar>
      </Box>
  );
}

export default Navbar;