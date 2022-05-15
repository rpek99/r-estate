import { Card, Grid, Typography } from "@mui/material";
import Link from 'next/link'


const AuthError = () => {
    return (
        <div>
            <Grid container justifyContent="center" alignItems="center">
                <Card sx={{ backgroundColor: "#fafafa", width: 500, height: 250, margin: 20}}>
                    <Grid container justifyContent="center" alignItems="center">
                    <Typography sx={{ fontSize: 35, m: 4, marginTop: 6, color: "#e53935"}}>
                        Authentication Error
                    </Typography>
                    <Typography sx={{ fontSize: 20 }}>
                        <Link href="/login">
                            Please first sign in
                        </Link>
                    </Typography>
                    </Grid>
                </Card>
                
            </Grid>
        </div>
    )
}

export default AuthError;
