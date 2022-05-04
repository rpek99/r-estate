import Link from 'next/link';
import { Card, Box, Button, Toolbar, Typography, Grid, Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainPost from '../components/MainPost';
import SmallPost from '../components/SmallPost';
import Footer from '../components/Footer';
import MiddlePost from '../components/MiddlePost';
import ReactFlagsSelect from "react-flags-select";


const theme = createTheme();

const post = 
  {
    title: 'Join this innovation',
    description: 'r-estate aims to eliminate many difficulties brought by traditional methods.'+
                  'The biggest contribution to the real estate sector is that it eliminates the problem '+
                  'of trust, thanks to its infrastructure. '+
                  'Also it keeps the user experience at the highest level by supporting '+
                  'this infrastructure with a simple and understandable interface.'
  }

const featuredPosts = [
  {
    id: 1,
    title: 'No need for trust',
    date: 'Nov 12',
    description:
      'Don\'t need to trust anyone during the buying and selling process, r-estate does not need middlemen.',
    image: 'https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/guides-selling-47d7f52fdaf669353712.webp',
    imageLabel: 'Image Text',
  },
  {
    id: 2,
    title: 'Blockchain assurance',
    date: 'Nov 11',
    description:
      'All transactions take place using the ethereum blockchain infrastructure. A record of each transaction is kept on this chain.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/2048px-Ethereum-icon-purple.svg.png',
    imageLabel: 'Image Text',
  },
  {
    id:3,
    title: 'Get rid of long processes',
    date: 'Nov 11',
    description:
      'No need for long and complex document processes. You can buy or sell property quickly with r-estate, which brings all transactions under one roof.',
    image: 'https://cdn2.iconfinder.com/data/icons/summer-travel-5/64/Summer-Travel-spend-Time-hour-512.png',
    imageLabel: 'Image Text',
  },
  
];

export default function Home() {
  return (
    <Card sx={{ backgroundColor: "#f5f5f5" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl">
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
          </Container>
          <Grid container justifyContent="center">
            <Box sx={{ width: 1300 }}>
              <MainPost />  
            </Box>
          </Grid>
        <Container maxWidth="lg">
            <Typography variant="h5" sx={{ fontWeight: "bold", margin: 2, marginTop: 5, marginBottom: 3}}>Explore all things property</Typography>
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <SmallPost key={post.id} post={post}/>
              ))}
            </Grid>
            <Grid sx={{ marginTop: 8}}>
              <MiddlePost post={post}/>
            </Grid>
        </Container>
        <Footer 
          contactTitle="Contact Us"
          contactInfo="r_estate@gmail.com"
        />
      </ThemeProvider>
    </Card>
  )
}
