import Link from 'next/link';
import { Box, Button, Toolbar, Grid, AppBar} from '@mui/material';
import Image from 'next/image';
import { useRouter } from "next/router";

const NoAuthNavbar = (props) => {

    const { push, asPath } = useRouter()
    
    const handleSignIn = () => push(`/auth/sign-in?callbackUrl=${asPath}`)

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
                        <Button size="large" onClick={handleSignIn} sx={{ backgroundColor: "#757575", color: "white", borderRadius: 2, textTransform: 'none', fontSize: "18px", width: 90, height: 40, ':hover': { bgcolor: '#424242'}} }>
                            Sign In
                        </Button>
                    </Grid>
                {/* <Grid sx={{ marginTop: 3, marginLeft: -95}}>
                    <ReactFlagsSelect  placeholder="Select Language" countries={["US", "TR"]}/>
                </Grid> */}
                </Grid>
            </Toolbar>
        : 
            <Box sx={{ margin: 12}}>
                <AppBar position="fixed" style={{ backgroundColor:"#455a64"}} >
                    <Toolbar>
                        <Link href="/">
                            <a>
                                <Image
                                    src="/logo2.png"
                                    width={200}
                                    height={70}
                                />
                            </a> 
                        </Link>
                        <Grid
                            justify="space-between"
                            container 
                            spacing={2}
                            justifyContent="center"
                            sx={{ maxWidth: 1100}}
                        >
                            <Grid item>
                                <Link href="/" style={{ textDecoration: 'none', color: 'white', }}>
                                    <Button variant="inherit" sx={{ textTransform: 'none', fontSize: 16}}>Home Page</Button>
                                </Link>
                            </Grid>    
                            <Grid item>
                                <Link href="/main" style={{ textDecoration: 'none', color: 'white', }}>
                                    <Button variant="inherit" sx={{ textTransform: 'none', fontSize: 16}}>Properties Page</Button>
                                </Link>
                            </Grid>          
                        </Grid> 
                        <Button 
                            onClick={handleSignIn} 
                            variant="inherit" 
                            sx={{ textTransform: 'none', fontSize: 16, marginLeft: 8 }}
                        >
                            Sign In
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        }
        </>
    )
}

export default NoAuthNavbar;