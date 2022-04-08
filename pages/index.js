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
import Card from '@mui/material/Card';

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
                <SmallPost key={post.title} post={post}/>
              ))}
            </Grid>
            <Grid sx={{ marginTop: 8}}>
              <MiddlePost post={post}/>
            </Grid>
        </Container>
        <Footer 
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </ThemeProvider>
    </Card>
  )
}
