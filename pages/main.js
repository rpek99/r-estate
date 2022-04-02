import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Properties from '../components/Properties';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const list = [
    {
        id: 1,
        title: 'The standard chunk of Lorem Ipsum used since the',
        description: 'It is a long established fact that a reader will be distracted by',
        name: 'Deneme1',
        city: 'Istanbul',
        room: 3,
        bedroom: 2,
        bath: 2,
        price: 100000,
        type: 'Villa',
        size: 150,
        photo: 'https://media.istockphoto.com/photos/brown-two-story-all-american-home-picture-id1158713117?k=20&m=1158713117&s=612x612&w=0&h=s_aoDM4KNoixI9qBLmJOBPMccoWsC11zxuBGGgFRiKY=',
    },
    {
        id: 2,
        title: 'The standard chunk of Lorem Ipsum used since the',
        description: 'It is a long established fact that a reader will be distracted by',
        name: 'Deneme2',
        city: 'Istanbul',
        room: 5,
        bedroom: 2,
        bath: 2,
        price: 100000,
        type: 'Villa',
        size: 150,
        photo: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg',
    },
    {
        id: 3,
        title: 'The standard chunk of Lorem Ipsum used since the',
        description: 'It is a long established fact that a reader will be distracted by',
        name: 'Deneme3',
        city: 'Istanbul',
        room: 8,
        bedroom: 2,
        bath: 2,
        price: 100000,
        type: 'Villa',
        size: 150,
        photo: 'https://www.realestate.com.au/blog/images/2000x1500-fit,progressive/2021/11/25163709/1.jpg',
    },
    {
        id: 4,
        title: 'The standard chunk of Lorem Ipsum used since the',
        description: 'It is a long established fact that a reader will be distracted by',
        name: 'Deneme4',
        city: 'Istanbul',
        room: 8,
        bedroom: 2,
        bath: 2,
        price: 100000,
        type: 'Villa',
        size: 150,
        photo: 'https://www.montgomeryhomes.com.au/wp-content/uploads/2021/10/Cayman-287-Display-Home-New-Lambton.jpg',
    },
    {
        id: 5,
        title: 'The standard chunk of Lorem Ipsum used since the',
        description: 'It is a long established fact that a reader will be distracted by',
        name: 'Deneme5',
        city: 'Istanbul',
        room: 8,
        bedroom: 2,
        bath: 2,
        price: 100000,
        type: 'Villa',
        size: 150,
        photo: 'https://www.bankrate.com/2020/09/10120654/How_to_buy_house_at_auction.jpg?auto=webp&optimize=high&crop=16:9',
    },
]


const Main = () => {
    return (
        <div>
            <Navbar />
            <Container maxWidth="lg" sx={{ marginTop: 4 }}>
                <Grid container spacing={4}>
                    {list.map((list) => (
                        <Properties key={list.id} post={list} />
                    ))}
                </Grid>
                <Footer title="Footer" description="Something about main page informations"/>
            </Container>
        </div>
    )
}

export default Main;

