import * as React from 'react';
import { Divider, IconButton, Container, Box, Typography, Grid } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = (props) => {
    const { contactTitle, contactInfo } = props;

    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 10, paddingBottom: 5}}>
            <Container maxWidth="lg">
                <Typography
                    align="center"
                    color="text.secondary"
                    component="p" 
                    sx= {{ fontFamily: "Georgia", fontSize: 20}}
                >
                    {contactTitle}
                </Typography>
                <Typography
                    align="center"
                    color="text.secondary"
                    component="p"
                    sx={{ fontFamily: "Georgia", fontSize: 18}}
                >
                    {contactInfo}
                </Typography>
                <Divider sx={{ m: 3 }}/>
                <Grid align="center">
                    <IconButton >
                        <TwitterIcon sx={{ fontSize: 30 }}/>
                    </IconButton>
                    <IconButton>
                        <FacebookIcon sx={{ fontSize: 30 }}/>
                    </IconButton>
                    <IconButton>
                        <InstagramIcon sx={{ fontSize: 30 }}/>
                    </IconButton>
                </Grid>
            </Container>
        </Box>
    );
} 

export default Footer;