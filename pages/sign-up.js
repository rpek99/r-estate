// import React from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router'
// import { Controller, useForm } from "react-hook-form";
// import { Button, CssBaseline, Grid, Box, Typography, Container, Card } from '@mui/material'
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import FormInput from '../components/FormInput';
// import PhoneInput  from '../components/PhoneInput';
// import parsePhoneNumber from "libphonenumber-js";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import "yup-phone";
// import axios from "axios";
// import 'react-toastify/dist/ReactToastify.css';
// import { useToasts } from 'react-toast-notifications'


// const theme = createTheme();

// export const Schema = Yup.object().shape({
//   firstName: Yup.string().required("Cannot be empty"),
//   lastName: Yup.string().required("Cannot be empty"),
//   email: Yup.string()
//     .email("Pleas enter valid e-mail address")
//     .required("Cannot be empty"),
//   mobilePhone: Yup.string()
//     .required("Cannot be empty")
//     .phone("TR", true, "Please enter a valid number"),
//   password: Yup.string()
//     .required("Cannot be empty")
//     .min(8, "Password must has minimum 8 character"),
//   confirmPassword: Yup.string()
//     .required("Cannot be empty")
//     .oneOf([Yup.ref("password"), null], "Passwords doesn't match"),
// });


// const UserSignupPage = () => {

//     const router = useRouter()

//     const { addToast } = useToasts()
    
//     const { handleSubmit, control } = useForm({
//       resolver: yupResolver(Schema),
//     });
  
//     const onSubmit = (registerForm) => {
//       const formData = new FormData();

//       const phoneNumber = parsePhoneNumber("+" + registerForm["mobilePhone"]);
//       if (phoneNumber) {
//         registerForm["mobilePrefix"] = parseInt(phoneNumber.countryCallingCode);
//         registerForm["mobilePhone"] = phoneNumber.nationalNumber;
//       }

//       const registerFormData = new Blob([JSON.stringify(registerForm)], {
//         type: "application/json",
//       });

//       formData.append("user", registerFormData);


//       axios
//         .post('/auth/register', formData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         }).then((res) => {
//           addToast(res?.data , { 
//             autoDismiss: true,
//             appearance: 'success' 
//           });
//           setTimeout(() => router.push({ pathname: '/login' }), 1500);
//         }).catch((err) => 
//           addToast(err?.response?.data, { 
//             autoDismiss: true,
//             appearance: 'error'
//           })
//         );
//       }
  
//       return (
//         <Card sx={{ backgroundColor: '#f5f5f5'}}>
//           <ThemeProvider theme={theme}>
//           <Container component="main" maxWidth="sm">
//             <Card sx={{ backgroundColor: 'white', borderRadius: '2%', height: 760}}>
//             <CssBaseline />
//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 m: 1,
//                 marginBottom: 2
//               }}
//             >
//                <Box 
//                   component="img" 
//                   src="logo1.png" 
//                   sx={{ width: 210, height: 80, m: 3, marginBottom: 3}}
//                 />
//               <Typography sx={{ fontSize: 25 }}> 
//                 Create Account
//               </Typography>
//               <Box sx={{ mt: 3 }}>
//                 <form
//                   noValidate
//                   onSubmit={handleSubmit(onSubmit)}
//                   encType='multipart/form-data'
//                 >
//                   <Grid container spacing={2} sx={{ maxWidth: 416}}>
//                     <Grid item xs={12} sm={6}>
//                       <Controller
//                         name='firstName'
//                         control={control}
//                         render={(props) => (
//                           <FormInput {...props} required label="Name"/>
//                         )}
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <Controller
//                         name='lastName'
//                         control={control}
//                         render={(props) => (
//                           <FormInput {...props} required label="Surname"/>
//                         )}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Controller
//                         name='email'
//                         control={control}
//                         render={(props) => (
//                           <FormInput {...props} required label="Email Address"/>
//                         )}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Controller
//                         name="mobilePhone"
//                         control={control}
//                         render={(props) => (
//                           <PhoneInput placeholder="Phone Number*:" {...props} />
//                         )}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Controller
//                         name='password'
//                         control={control}
//                         render={(props) => (
//                           <FormInput {...props} type="password" required label="Password"/>
//                         )}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Controller
//                         name='confirmPassword'
//                         control={control}
//                         render={(props) => (
//                           <FormInput {...props} type="password" required label="Confirm Password"/>
//                         )}
//                       />
//                     </Grid>
//                   </Grid>
//                   <Button
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     sx={{ mt: 3, mb: 2, backgroundColor: "#455a64", fontSize: 15, height: 40, ':hover': { bgcolor: '#263238'}, textTransform: 'none'}}
//                   >
//                     Create Account
//                   </Button>
//                   <Grid container justifyContent="space-between">
//                     <Grid item xs={6}>
//                       <Link href="/">
//                         Return to Home page
//                       </Link>
//                     </Grid>
//                     <Grid item xs={6}>
//                       <Link href="/login">
//                           Already have an account? Sign in
//                       </Link>
//                     </Grid>
//                   </Grid>
//                 </form>
//               </Box>
//             </Box>
//             </Card>
//           </Container>
//         </ThemeProvider>
//       </Card>
//       )
//   };

//   export default UserSignupPage;