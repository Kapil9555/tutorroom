import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
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

const ContactUs = () => {
    const { state } = useBottomBar()
    return (
        <>
            {state.currentScreenSize < 918 && <BottomNavBar />}
            <Header />
            <Grid container >

                <Grid container sx={{ pt: '90px', height: '440px', backgroundImage: `url(${contactwall})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(90,90,90)', backgroundBlendMode: 'multiply' }}>
                    <Grid item xs={7} sx={{ mt: '-6%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant='h2' sx={{ fontSize: { lg: '55px', md: '48px', sm: '40px', xs: '36px' }, fontWeight: '600', textAlign: 'center', color: MAIN_COLOR }}>See Your Digital Transformation Growth With Us</Typography>
                        {/* <Typography variant='h5' sx={{ fontSize: '30px', color: 'white', textAlign: 'center', }}>Get all Your question answer by our business development team.</Typography> */}
                        <Box sx={{ fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '19px' }, color: 'white', mt: '5px' }}>
                            <Typewriter
                                options={{
                                    strings: ['Get all Your question answer by our business development team .'],
                                    autoStart: true,
                                    loop: true,
                                    skipAddStyles: 10
                                }} />
                        </Box>

                    </Grid>

                </Grid>
                <Container disableGutters>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { lg: '-7%', md: '25px', sm: '35px', xs: '35px' } }}>
                        <Grid item lg={8} md={9} sm={11} xs={11} sx={{ borderRadius: '10px', backgroundColor: 'white', boxShadow: '1px 10px 19px 0px rgba(0,0,0,0.5)' }}>
                            <Grid container sx={{ padding: '25px  ' }}>
                                <Grid item xs={12}>
                                    <Typography xs={12} variant='h4' sx={{ fontSize: { lg: '38px', md: '35px', sm: '30px', xs: '30px' }, fontWeight: '600', color: '#1976d2' }}>Get in Touch</Typography>

                                </Grid>
                                <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '30px' }} >
                                    <Grid item lg={5.5} md={5.5} sm={12} xs={12}>
                                        <TextField variant="outlined" placeholder='Full Name*' size='small' fullWidth />
                                    </Grid>
                                    <Grid item lg={5.5} md={5.5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '25px', xs: '25px' } }}>
                                        <TextField variant="outlined" placeholder='Business Email Address*' size='small' fullWidth />
                                    </Grid>

                                </Grid>
                                <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: { lg: '30px', md: '30px', sm: '25px', xs: '30px' } }}>
                                    <Grid item lg={5.5} md={5.5} sm={12} xs={12} >
                                        <TextField variant="outlined" placeholder='Phone Number*' size='small' fullWidth />
                                    </Grid>
                                    <Grid item lg={5.5} md={5.5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '25px', xs: '25px' } }}>
                                        <TextField variant="outlined" placeholder='Organization/institution*' size='small' fullWidth />
                                    </Grid>

                                </Grid>
                                <Grid container sx={{ mt: '30px' }}>
                                    <Grid item xs={12}>
                                        <TextField variant="outlined" placeholder='Message' size='small' fullWidth />
                                    </Grid>
                                    <Grid item lg={4} md={6} sm={6} xs={12} sx={{ border: '1px solid #d3d3d3', mt: '30px', padding: '5px', borderRadius: '7px', backgroundColor: '#f9f9f9' }}>
                                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                                            <Box>
                                                <Typography sx={{ display: 'none', fontSize: '13px', color: 'red' }}>Verification expired. check the checkbox again</Typography>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox />} label="I'm not a robot" sx={{ color: 'grey', }} fontSize='20px' />
                                                    {/* <FormControlLabel required control={<Checkbox />} label="Required" /> */}
                                                </FormGroup>
                                            </Box>

                                            <Box sx={{ textAlign: 'center' }} >
                                                <img src={captcha} alt='captcha' width={'70%'} />
                                                <Typography sx={{ fontSize: '14px', fontWeight: '600', color: 'grey' }}>reCaptcha</Typography>
                                                <Typography sx={{ fontSize: '10px', color: 'grey' }}>privacy-Terms</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12} >
                                        <Typography sx={{ fontSize: '15px', fontWeight: '600', mt: '20px' }}>Note: I consent that my personal data will be processed according to <span style={{ color: '#1976d2' }}>AdelSocial' privacy policy </span>  </Typography>
                                    </Grid>
                                    <Grid item xs={12} sx={{ textAlign: 'right', mt: { lg: "2px", md: '3px', sm: '5px', xs: '6px' } }}>
                                        <Button variant='contained' sx={{ borderRadius: '10px', padding: '8px 17px' }}>Submit</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container sx={{ mt: { lg: '50px', md: '40px', sm: '30px', xs: '30px' }, display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-start', padding: '20px 18px' }}>
                        <Grid item lg={5.44} md={6} sm={12} xs={12} sx={{ borderRadius: '10px', boxShadow: '1px 1px 10px 0px rgba(0,0,0,0.75)', height: '450px' }}>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0553500909477!2d77.21102887449014!3d28.538055988366565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fceaa6e5387%3A0x37ebbd6c60001afc!2sAdelSocial!5e0!3m2!1sen!2sin!4v1689831157113!5m2!1sen!2sin" width="100%" height="100%" style={{ border: '0', allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade", borderRadius: '10px' }}></iframe>

                        </Grid>
                        <Grid item lg={5} md={5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '10px', xs: '15px' }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant='h5' sx={{ fontSize: { lg: '35px', md: '33px', sm: '30px', xs: '28px' }, color: '#01579b', fontWeight: '600' }}>Locate Us</Typography>
                            <Typography variant='h2' sx={{ fontSize: '18px', fontWeight: '600' }}>Malviya Nagar</Typography>
                            <Typography sx={{ fontSize: { lg: '19px', md: '19px', sm: '17px', xs: '16px' }, mt: '5px', textAlign: 'center' }}>P-27, 17, Block P, <br />Shivalik Colony, Malviya Nagar,<br /> New Delhi, Delhi 110017, <br />info@adelsocial.com</Typography>
                            <Typography sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', fontSize: { lg: '19px', md: '19px', sm: '17px', xs: '16px' } }}><PhoneIphoneIcon fontSize='small' /> +91-9773926687</Typography>
                            <Grid container sx={{ mt: { lg: '15px', md: '15px', sm: '3px', xs: '0px' }, height: '200px' }}>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <Typography variant='h4' sx={{ fontSize: { lg: '26px', md: '24px', sm: '24px', xs: '24px' }, color: '#01579b', fontWeight: '600' }}>Working Hours</Typography>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '19px', sm: '17px', xs: '16px' }, mt: '5px', textAlign: 'center' }}>Our office is open 24*7 <br />Open Monday to Saturday<br /> From 08:00 AM to 07:00 PM</Typography>

                                </Grid>
                            </Grid>


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