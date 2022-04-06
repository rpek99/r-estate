import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Controller, useForm } from "react-hook-form";
import FormInput from '../components/FormInput';
import PhoneInput from '../components/PhoneInput';
import Link from 'next/link';
import Card from '@mui/material/Card';


const theme = createTheme();

const UserSignupPage = () => {
  
    
    const { handleSubmit, control } = useForm({

    });
  
    const onSubmit = (registerForm) => {
      }
  
      return (
        <Card sx={{ backgroundColor: '#f5f5f5'}}>
          <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="sm" sx={{ marginBottom: 5}}>
            <Card sx={{ backgroundColor: 'white', borderRadius: '2%', height: 760}}>
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                m: 1,
                marginBottom: 2
              }}
            >
               <Box 
                  component="img" 
                  src="https://imgyukle.com/f/2022/04/06/EAjw1Q.png" 
                  sx={{ width: 210, height: 80, m: 3, marginBottom: 3}}
                />
              <Typography sx={{ fontSize: 25 }}> 
                Create Account
              </Typography>
              <Box sx={{ mt: 3 }}>
                <form
                  noValidate
                  onSubmit={handleSubmit(onSubmit)}
                  encType='multipart/form-data'
                >
                  <Grid container spacing={2} sx={{ maxWidth: 416}}>
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name='firstName'
                        control={control}
                        render={(props) => (
                          <FormInput {...props} required label="Name"/>
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name='lastName'
                        control={control}
                        render={(props) => (
                          <FormInput {...props} required label="Surname"/>
                        )}
                      />
                    </Grid>
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
                        name="mobilePhone"
                        control={control}
                        render={(props) => (
                          <PhoneInput placeholder="Phone Number*:" {...props} />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Controller
                        name='password'
                        control={control}
                        render={(props) => (
                          <FormInput {...props} type="password" required label="Password"/>
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Controller
                        name='confirmPassword'
                        control={control}
                        render={(props) => (
                          <FormInput {...props} type="password" required label="Confirm Password"/>
                        )}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#455a64", fontSize: 15, height: 40, ':hover': { bgcolor: '#263238'}, textTransform: 'none'}}
                  >
                    Create Account
                  </Button>
                  <Grid container justifyContent="space-between">
                    <Grid item xs={6}>
                      <Link href="/">
                        Return to Home page
                      </Link>
                    </Grid>
                    <Grid item xs={6}>
                      <Link href="/login">
                          Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Box>
            </Card>
          </Container>
        </ThemeProvider>
      </Card>
      )
  };

  export default UserSignupPage;