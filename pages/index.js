import Navbar from '../components/Navbar'
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

const theme = createTheme();

const featuredPosts = [
  {
    title: 'Explore suburb profiles',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Need help with',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Get estimated property',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  
];

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar sx={{ marginTop: "10px"}}>
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
            <Button size="medium" sx={{ marginRight: 2, color: "#424242", fontWeight: "bold", fontSize: "15px"}}>
              Sign up
            </Button>
          </Link>
          <Link href='/login'>
            <Button variant="outlined" size="large"  style={{backgroundColor: "gray", color: "white", borderRadius: 8}}>
              Login
            </Button>
          </Link>
        </Toolbar>
        <main>
          <MainPost />
          <Typography variant="h5" sx={{ fontWeight: "bold", margin: 2, marginTop: 6, marginBottom: 3}}>Explore all things property</Typography>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <SmallPost key={post.title} post={post}/>
            ))}
          </Grid>
        </main>
      </Container>
      <Footer 
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  )
}
