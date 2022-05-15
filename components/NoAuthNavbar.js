import Link from 'next/link';
import { Box, Button, Toolbar, Grid, AppBar} from '@mui/material';
import Image from 'next/image';

const NoAuthNavbar = (props) => {

    return (
        <>
        {!props.page ? 
            <Toolbar sx={{ marginTop: 1}}>
                <Grid container justifyContent="space-between">
                <Grid item>
                    <Box
                        component="img" 
                        src="logo3.png" 
                        sx={{ height: 90, width: 220}}
                    />
                </Grid>
                <Grid item sx={{ marginTop: 3}}>
                    <Link href='sign-up'>
                    <Button size="medium" sx={{ marginRight: 2, color: "#424242", fontWeight: "bold", fontSize: "18px", textTransform: 'none', ':hover': { bgcolor: '#e0e0e0'} }}>
                        Sign Up
                    </Button>
                    </Link>
                    <Link href='/login'>
                    <Button size="large"  sx={{ backgroundColor: "#757575", color: "white", borderRadius: 2, textTransform: 'none', fontSize: "18px", width: 90, height: 40, ':hover': { bgcolor: '#424242'}} }>
                        Login
                    </Button>
                    </Link> 
                </Grid>
                {/* <Grid sx={{ marginTop: 3, marginLeft: -95}}>
                    <ReactFlagsSelect  placeholder="Select Language" countries={["US", "TR"]}/>
                </Grid> */}
                </Grid>
            </Toolbar>
        : 
            <Box sx={{ margin: 10}}>
                <AppBar position="fixed" style={{ backgroundColor:"#455a64"}} >
                <Toolbar>
                    <Image
                        src="/logo2.png"
                        width={210}
                        height={80}
                    />
                    <Grid
                        justify="space-between"
                        container 
                        spacing={2}
                        justifyContent="center"
                    >
                        <Grid item>
                            <Link href="/" style={{ textDecoration: 'none', color: 'white', }}>
                                <Button variant="inherit" sx={{ textTransform: 'none', fontSize: 16}}>Home Page</Button>
                            </Link>
                        </Grid>    
                        <Grid item>
                            <Link href="/main" style={{ textDecoration: 'none', color: 'white', }}>
                                <Button variant="inherit" sx={{ textTransform: 'none', fontSize: 16}}>Main Page</Button>
                            </Link>
                        </Grid>          
                    </Grid>  
                    <Link href="/login" style={{ textDecoration: 'none', color: 'white', }}>
                        <Button variant="inherit" sx={{ textTransform: 'none', fontSize: 16}}>Login</Button>
                    </Link>
                    <Link href="/sign-up" style={{ textDecoration: 'none', color: 'white'}}>
                        <Button variant="inherit" sx={{ textTransform: 'none', fontSize: 16, backgroundColor: "#607d8b" }}>SignUp</Button>
                    </Link>
                </Toolbar>
                </AppBar>
            </Box>
        }
        </>
    )
}

export default NoAuthNavbar;