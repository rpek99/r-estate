import { React } from 'react';
import Link from 'next/link';
import { Toolbar, Button, AppBar, Grid, Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';


const AuthNavbar = () => {

  const onClick = () => {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("tokenKey")
  }
  
  return (
    <Box sx={{ margin: 10}}>
        <AppBar position="fixed" style={{ backgroundColor:"#455a64"}} >
          <Toolbar>
            <Box 
              component="img" 
              src="/logo2.png" 
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
            <Link href="/">
              <Button startIcon={<LogoutIcon />} onClick={onClick} sx={{ marginLeft: 2}} variant="inherit">
                Logout
              </Button>
            </Link> 
          </Toolbar>
        </AppBar>
      </Box>
  );
}

export default AuthNavbar;