import React  from 'react'
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import FormInput from "../components/FormInput";
import Navbar from "../components/Navbar";
import QueryInput from "../components/QueryInput";
import {useDropzone} from 'react-dropzone'
import Dropzone from 'react-dropzone';

const typeList = [
    'Apartment',
    'Villa',
    'Bungalow',
    'Penthouse',
];

const poolCheck = [
    'Yes',
    'No'
];

const SellProperty = () => {

    const { handleSubmit, control } = useForm({
        // resolver: yupResolver(Schema),
    });

    const onSubmit = () => {

    }

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
    const files = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    )); 

    return (
        <div>
            <Navbar />
            <Card sx={{ marginTop: 12, display: 'flex', backgroundColor: '#eeeeee', boxShadow: 'none', height: 80}}>
                <Container maxWidth="md">
                    <Grid container>
                            <Grid item sx={{ marginTop: 2 }} xs={10}>
                                <Grid>
                                    <Typography sx={{ fontFamily: 'Raleway', fontSize: 30, color: '#424242'}}>Mülk bilgilerini giriniz</Typography>
                                </Grid>
                            </Grid>
                    </Grid>
                </Container>
            </Card>
            <Container maxWidth="md" sx={{ marginBottom: 10 }}>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: 5
                    }}
                >
                    <Box noValidate sx={{ mt: 1 }}>
                        <form
                            noValidate
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <Grid container spacing={2} sx={{ maxWidth: 600}}>
                                {/* This part should check again */}
                                <Box sx={{ backgroundColor: "#e3f2fd", borderRadius: '1%', marginLeft: 2, padding: 2, width: 600}}>
                                    <section className="container">
                                        <div {...getRootProps({className: 'dropzone'})}>
                                            <input {...getInputProps()} />
                                            <p>Fotoğraf yüklemek için tıklayın</p>
                                        </div>
                                        <aside>
                                            <h4>Dosyalar</h4>
                                            <ul>{files}</ul>
                                        </aside>
                                    </section>
                                </Box>
                                <Grid item xs={12}>
                                    <Controller
                                        name='title'
                                        control={control}
                                        render={(props) => (
                                            <FormInput {...props} required label="Mülk başlığı"/>
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Controller
                                        name='overview'
                                        control={control}
                                        render={(props) => (
                                            <FormInput {...props} required label="Önizlem bilgisi" rows={2}/>
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Controller
                                        name='detail'
                                        control={control}
                                        render={(props) => (
                                            <FormInput {...props} required label="Mülk hakkında detaylı bilgi" rows={5}/>
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ marginTop: 2}}>
                                    <Typography sx={{ fontFamily: 'Raleway', fontSize: 25, color: '#424242'}}>Mülk özellikleri</Typography>
                                </Grid>
                                <Grid container sx={{ m: 1, marginTop: 2}}>
                                    <Grid item xs={8} sx={{ m: 1 }}>
                                        <Controller
                                            name='location'
                                            control={control}
                                            render={(props) => (
                                                <FormInput {...props} required label="Lokasyon"/>
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={8} sx={{ m: 1 }}>
                                        <Controller
                                            name='area'
                                            control={control}
                                            render={(props) => (
                                                <FormInput {...props} required label="Yaşam alanı (m2)"/>
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={8} sx={{ m: 1 }}>
                                        <Controller
                                            name='bathroom'
                                            control={control}
                                            render={(props) => (
                                                <FormInput {...props} required label="Banyo sayısı"/>
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={8} sx={{ m: 1 }}>
                                        <Controller
                                            name='bedroom'
                                            control={control}
                                            render={(props) => (
                                                <FormInput {...props} required label="Yatak odası sayısı"/>
                                            )}
                                        />
                                    </Grid>
                                    <Grid > 
                                        <QueryInput type="input" queryName="Mülk Tipi" options={typeList}/>
                                    </Grid>
                                    <Grid> 
                                        <QueryInput type="input" queryName="Havuz" options={poolCheck}/>
                                    </Grid>
                                    
                                </Grid>
                            </Grid>
                            <Grid container sx={{ marginTop: 1 }}>
                                <Link href="/main">
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ width: 200, mt: 3, mb: 2 , backgroundColor: "#455a64", ':hover': { bgcolor: '#263238'}, textTransform: 'none', fontSize: 15}}
                                    >
                                        Tamamla
                                    </Button>
                                </Link>
                            </Grid>
                        </form>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default SellProperty;