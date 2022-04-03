import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MainPost from '../components/MainPost';
import SmallPost from '../components/SmallPost';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Footer from '../components/Footer';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/Link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MiddlePost from '../components/MiddlePost';

const theme = createTheme();

const post = 
  {
    title: 'Explore suburb profiles',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting'+
                  'industry. Lorem Ipsum has been the industry standard dummy text'+
                  'ever since the 1500s, when an unknown printer took a galley of type.',
  }

const featuredPosts = [
  {
    title: 'Explore suburb profiles',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/guides-selling-47d7f52fdaf669353712.webp',
    imageLabel: 'Image Text',
  },
  {
    title: 'Need help with',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/ZJZZK5B2ZNF25LYQHMUTBTOMLU.png',
    imageLabel: 'Image Text',
  },
  {
    title: 'Get estimated property',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/homeloan-4ee39797e0d724886d9d.webp',
    imageLabel: 'Image Text',
  },
  
];

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Toolbar sx={{ marginTop: "8px"}}>
            <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="left"
                noWrap
                sx={{ flex: 1, fontWeight: "bold" }}
            >
                R - Estate
            </Typography>
            <Link href='sign-up'>
              <Button size="medium" sx={{ marginRight: 2, color: "#424242", fontWeight: "bold", fontSize: "18px", textTransform: 'none', ':hover': { bgcolor: '#e0e0e0'}} }>
                Sign Up
              </Button>
            </Link>
            <Link href='/login'>
              <Button size="large"  sx={{ backgroundColor: "#757575", color: "white", borderRadius: 2, textTransform: 'none', fontSize: "18px", width: 90, height: 40, ':hover': { bgcolor: '#424242'}} }>
                Login
              </Button>
            </Link>
          </Toolbar>
        </Container>
        <Box sx={{ marginLeft: 10, marginRight: 10}}>
          <MainPost />  
        </Box>
      <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: "bold", margin: 2, marginTop: 6, marginBottom: 3}}>Explore all things property</Typography>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <SmallPost key={post.title} post={post}/>
            ))}
          </Grid>
          <Grid sx={{ marginTop: 5}}>
            <MiddlePost post={post}/>
          </Grid>
      </Container>
      <Footer 
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  )
}
