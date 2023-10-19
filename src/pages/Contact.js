import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, Grid, TextField, TextareaAutosize, Typography } from '@mui/material';
import React, { useContext } from 'react';
import captcha from '../assets/capcha.jpeg'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import contactwall from '../assets/contactwall.jpg';
import Typewriter from 'typewriter-effect';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SendMessage from '../components/SendMessage';
import { MAIN_COLOR } from '../constant';
import useBottomBar from '../utils/useBottomBar';
import BottomNavBar from '../global/BottomNavBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ContactUs = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
         },[])
    const { state } = useBottomBar()
    return (
        <>
            {state.currentScreenSize < 918 && <BottomNavBar />}
            <Header />
            <Grid container >

                <Grid container sx={{ pt: '90px', height: '440px', backgroundImage: `url(${contactwall})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(90,90,90)', backgroundBlendMode: 'multiply' }}>
                    <Grid item xs={7} sx={{ mt: '-6%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant='h2' sx={{ fontSize: { lg: '55px', md: '48px', sm: '40px', xs: '36px' }, fontWeight: '600', textAlign: 'center', color: MAIN_COLOR }}>Contact Us </Typography>
                        {/* <Typography variant='h5' sx={{ fontSize: '30px', color: 'white', textAlign: 'center', }}>Get all Your question answer by our business development team.</Typography> */}
                        <Box sx={{ fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '19px' }, color: 'white', mt: '5px' }}>
                            <Typewriter 
                                options={{
                                    strings: ['If there are any questions regarding this privacy policy. you may contact us using the information belows'],
                                    autoStart: true,
                                    loop: true,
                                    skipAddStyles: 10,
                                }} />
                        </Box>

                    </Grid>

                </Grid>
                <Container disableGutters>
                    <Grid container data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { lg: '-7%', md: '25px', sm: '35px', xs: '35px' } }}>
                        <Grid item lg={8} md={9} sm={11} xs={11} sx={{ borderRadius: '10px', backgroundColor: 'white', boxShadow: '1px 10px 19px 0px rgba(0,0,0,0.5)' }}>
                            <Grid container sx={{ padding: '25px  ' }}>
                                <Grid item xs={12}>
                                    <Typography xs={12} variant='h4' sx={{ fontSize: { lg: '38px', md: '35px', sm: '30px', xs: '30px' }, fontWeight: '600', color: '#1976d2' }}>Send your message directly</Typography>

                                </Grid>
                                <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '30px' }} >
                                    <Grid item lg={5.5} md={5.5} sm={12} xs={12}>
                                        <TextField variant="outlined" placeholder='Full Name*' size='small' fullWidth />
                                    </Grid>
                                    <Grid item lg={5.5} md={5.5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '25px', xs: '25px' } }}>
                                        <TextField variant="outlined" placeholder='Email *'type='email' size='small' fullWidth />
                                    </Grid>

                                </Grid>
                                <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: { lg: '30px', md: '30px', sm: '25px', xs: '30px' } }}>
                                    <Grid item lg={5.5} md={5.5} sm={12} xs={12} >
                                        <TextField variant="outlined" placeholder='Phone Number*' size='small' fullWidth />
                                    </Grid>
                                    <Grid item lg={5.5} md={5.5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '25px', xs: '25px' } }}>
                                        <TextField variant="outlined" placeholder='Subject*' size='small' fullWidth />
                                    </Grid>

                                </Grid>
                                <Grid container sx={{ mt: '30px' }}>
                                    <Grid item xs={12}>
                                        <TextareaAutosize variant="outlined" placeholder='Message' size='small' fullWidth style={{width:'100%'}} minRows={6} />
                                    </Grid>
                                   
                                    
                                    <Grid item xs={12} sx={{  textAlign: 'right', mt: { lg: "20px", md: '20px', sm: '20px', xs: '20px' } }}>
                                        <Button variant='contained' sx={{ borderRadius: '10px', padding: '8px 17px' }}>Send Message</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container sx={{ mt: { lg: '50px', md: '40px', sm: '30px', xs: '30px' }, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '20px 18px' }}>
                        <Grid item data-aos='fade-up' lg={5.44} md={6} sm={12} xs={12} sx={{ borderRadius: '10px', boxShadow: '1px 1px 10px 0px rgba(0,0,0,0.75)', height: '450px' }}>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.5519757846278!2d-98.48714869999999!3d29.6167077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c6206df1cd273%3A0x672fa5a7d2bdc533!2s401%20E%20Sonterra%20Blvd%20Suite%20375%2C%20San%20Antonio%2C%20TX%2078258%2C%20USA!5e0!3m2!1sen!2sin!4v1697610015393!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </Grid>
                        <Grid item data-aos='fade-up' lg={5} md={5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '10px', xs: '15px' }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant='h5' sx={{ fontSize: { lg: '35px', md: '33px', sm: '30px', xs: '28px' }, color: '#01579b', fontWeight: '600' }}>Locate Us</Typography>
                            <Typography variant='h2' sx={{ fontSize: '18px', fontWeight: '600' }}>San Antonio</Typography>
                            <Typography sx={{ fontSize: { lg: '19px', md: '19px', sm: '17px', xs: '16px' }, mt: '5px', textAlign: 'center' }}>401 E Sonterra Blvd. Ste 375, <br />San Antonio, TX 78258, <br />info@mytutorroom.com</Typography>
                            <Typography sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', fontSize: { lg: '19px', md: '19px', sm: '17px', xs: '16px' } }}><PhoneIphoneIcon fontSize='small' />210-986-1774</Typography>
                            {/* <Grid container sx={{ mt: { lg: '15px', md: '15px', sm: '3px', xs: '0px' }, height: '200px' }}>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <Typography variant='h4' sx={{ fontSize: { lg: '26px', md: '24px', sm: '24px', xs: '24px' }, color: '#01579b', fontWeight: '600' }}>Working Hours</Typography>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '19px', sm: '17px', xs: '16px' }, mt: '5px', textAlign: 'center' }}>Our office is open 24*7 <br />Open Monday to Saturday<br /> From 08:00 AM to 07:00 PM</Typography>

                                </Grid>
                            </Grid> */}


                        </Grid>
                    </Grid>

                </Container>
            </Grid >
            <SendMessage />
            <Footer />
        </>

    )
}

export default ContactUs