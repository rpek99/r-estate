import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Card, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import { ethers } from "ethers";
import { ipfs } from '../util/ipfsUtil';


const UserProperty = (props) => {

    const { property } = props;

    return (
        <Card sx={{ display: 'flex', backgroundColor: "#eeeeee", height: 200, marginTop: 5 }}>
            <CardMedia
                component="img"
                sx={{ width: '30%'}}
                image={ipfs(property.images[0])}
            />
            <CardContent sx={{ m : 2, marginTop: 3, marginLeft: 5, minWidth: 200 }}>
                <Typography sx={{ fontSize: 20}}>P. Location</Typography>
                <Divider sx={{ width: 100, marginTop: 1}}/>
                <Typography sx={{ fontSize: 18, marginTop: 2, textTransform: 'capitalize'}}>{property.location}</Typography>
            </CardContent>
            <CardContent sx={{ m : 2, marginLeft: 0, marginTop: 3 }}>
                <Typography sx={{ fontSize: 20}}>P. Price</Typography>
                <Divider sx={{ width: 90, marginTop: 1}}/>
                <Typography sx={{ fontSize: 18, marginTop: 2}}>{ethers.utils.formatEther(property.price)} ETH</Typography>
            </CardContent>
            <CardContent sx={{ m : 2, marginLeft: 0, marginTop: 3 }}>
                <Typography sx={{ fontSize: 20}}>P. Number</Typography>
                <Divider sx={{ width: 110, marginTop: 1}}/>
                <Typography sx={{ fontSize: 18, marginTop: 2}}>#{property.listingId}</Typography>
            </CardContent>
            <CardContent sx={{ m : 2, marginLeft: 0, marginTop: 3 }}>
                <Typography sx={{ fontSize: 18, marginLeft: 2}}>Sold</Typography>
                <Divider sx={{ width: 80, marginTop: 1}}/>
                {property.owner.slice(2,6) != "0000" ? <CheckIcon sx={{ marginTop: 2, marginLeft: 3}} /> : <CloseIcon sx={{ marginTop: 2, marginLeft: 3}}/>}
            </CardContent>
        </Card>        
    )
}

export default UserProperty;