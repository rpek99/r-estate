import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const MiddlePost = (props) => {

    const { post } = props;

    return(
        <Grid item xs={12} md={6}>
                <Card sx={{ display: 'flex', backgroundColor: '#f5f5f5', marginLeft: 1 }}>
                    <CardMedia
                        component="img"
                        sx={{ width: '45%', display: { xs: 'none', sm: 'block' } }}
                        image="https://static.news.bitcoin.com/wp-content/uploads/2019/10/uBRlFnvH-real-estate-crypto.jpg"
                    />
                    <CardContent sx={{ flex: 1, marginTop: 8, marginLeft: 3}}>
                        <Typography component="h2" variant="h5" sx={{ marginBottom: 2}}>
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {post.description}
                        </Typography>
                        <Button 
                            href="/sign-up"
                            sx={{ 
                                minWidth: '150px', minHeight: '20px',
                                marginTop: 5,
                                fontSize: "15px",
                                backgroundColor: '#616161',
                                color: 'white ',
                                textTransform: 'none',
                                ':hover': { bgcolor: '#263238'}}
                            }
                        >
                            Join
                        </Button>
                    </CardContent>
                </Card>
        </Grid>
    )
}

export default MiddlePost;