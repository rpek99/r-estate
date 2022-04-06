import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import { Controller, useForm } from "react-hook-form";
import Link from 'next/link';
import FormInput from '../components/FormInput';
import Card from '@mui/material/Card';


const theme = createTheme({
    typography: {
      "fontFamily":"Roboto",
      "fontSize": 14,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500
    }
});

const Login = () => {

    const { handleSubmit, control } = useForm({
        // resolver: yupResolver(Schema),
    });

    const onSubmit = () => {

    }

    return (
      <Card sx={{ backgroundColor: '#f5f5f5'}}>
        <Container maxWidth="sm" sx={{ marginBottom: 5 }}>
          <CssBaseline />
          <Card sx={{borderRadius: '2%', height: 760}}>
              <Grid container justifyContent="center" alignItems="center">
              <Box 
                component="img" 
                src="https://imgyukle.com/f/2022/04/06/EAjw1Q.png" 
                sx={{ width: 210, height: 80, marginTop: 8}}
              />
              </Grid>
            <Box
              sx={{
                marginTop: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: 5
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#46505A" }}>
                <LoginIcon />
              </Avatar>
              <Typography sx={{ fontSize: 25}}>
                Login
              </Typography>
              <Box noValidate sx={{ mt: 1 }}>
                <form
                  noValidate
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Grid container spacing={2} sx={{ maxWidth: 415}}>
                    <Grid item xs={12}>
                      <Controller
                        name='email'
                        control={control}
                        render={(props) => (
                          <FormInput {...props} required label="Email Address"/>
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Controller
                        name='password'
                        control={control}
                        render={(props) => (
                          <FormInput {...props} required label="Password" type="password"/>
                        )}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 , backgroundColor: "#455a64", ':hover': { bgcolor: '#263238'}, textTransform: 'none', fontSize: 15}}
                  >
                    Login
                  </Button>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Link href="/">
                        Return to Home page
                      </Link>
                    </Grid>
                    <Grid item xs={6}>
                      <Link href="/sign-up">
                        Don't have an account? Sign Up
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Box>
          </Card> 
        </Container>     
      </Card>
    )
}

export default Login;