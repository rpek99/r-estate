import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Controller, useForm } from "react-hook-form";
import { Avatar, Button, CssBaseline, Grid, Box, Typography, Container, Card} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import FormInput from '../components/FormInput';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useToasts } from 'react-toast-notifications'
import axios from "axios";

export const Schema = Yup.object().shape({
  email: Yup.string()
    .email("Pleas enter valid e-mail address")
    .required("Cannot be empty"),
  password: Yup.string()
    .required("Cannot be empty")
});

const Login = () => {

    const router = useRouter()

    const { addToast } = useToasts()

    const { handleSubmit, control } = useForm({
        resolver: yupResolver(Schema),
    });

    const onSubmit = (loginForm) => {
      
      axios
        .post('/auth/authenticate', {
            'email': loginForm["email"],
            'password': loginForm["password"]
        },
        {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((result) => {localStorage.setItem("tokenKey", result.data.message);
                          localStorage.setItem("currentUser", result.data.userId)}) 
        .then(() => { 
          addToast("Login successful" , { 
            autoDismiss: true,
            appearance: 'success' 
          });
          setTimeout(() => router.push({ pathname: '/main' }), 1500);
        })
        .catch((err) =>
          addToast(err?.response?.data, { 
            autoDismiss: true,
            appearance: 'error'
          })
        );
    }

    return (
      <Card sx={{ backgroundColor: '#f5f5f5'}}>
        <Container maxWidth="sm">
          <CssBaseline />
          <Card sx={{borderRadius: '2%', height: 760}}>
              <Grid container justifyContent="center" alignItems="center">
              <Box 
                component="img" 
                src="logo1.png" 
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