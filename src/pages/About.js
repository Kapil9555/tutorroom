import { Box, Container, Grid, Typography } from '@mui/material';
import team from '../assets/team.svg';
import first from '../assets/firstal.svg';
import web from '../assets/web.svg';
import email from '../assets/email.svg';
import seo from '../assets/seo.svg';
import years from '../assets/years.svg';
import mobileapp from '../assets/mobileapp.png';
import web1 from '../assets/webapp.png';
import landing from '../assets/landing.png';
import webdev from '../assets/webdev.png';
import "react-multi-carousel/lib/styles.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MAIN_COLOR } from '../constant'; 
import SendMessage from '../components/SendMessage';
import { Button } from '@mui/material';
import aboutimg from '../assets/aboutbanner.jpg';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import adelteam from '../assets/adelteam.jpg';
import BottomNavBar from '../global/BottomNavBar';
import useBottomBar from '../utils/useBottomBar';
import { useContext, useEffect } from 'react';
import './Homepage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
    {
        logo: team,
        number: '16+',
        text: 'Team Members'
    },
    {
        logo: first,
        number: '41',
        text: 'First Position'
    },
    {
        logo: email,
        number: '76',
        text: 'Email Campaigns'
    },
    {
        logo: seo,
        number: '96',
        text: 'SEO Campaigns'
    },
    {
        logo: years,
        number: '12',
        text: 'Years in Marketing'
    },
    {
        logo: web,
        number: '143',
        text: 'Web Analytics'
    }
];

const About = () => {

    const { state } = useBottomBar();
    const services = [
        { title: 'App Development', icon: mobileapp, desc: "Our goal in mobile app design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the app’s features and functionality.", animate: "fade-right" },
        { title: 'Landing Page Design', icon: landing, desc: "Our goal in landing page design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the page’s features and content.", animate: "fade-left" },
        { title: 'Web Design', icon: web1, desc: "Our goal in web design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the website’s features and content.", animate: "fade-right" },
        { title: 'Web Development', icon: webdev, desc: "Our goal in web development is to create an intuitive and functional website that meets our clients' needs and requirements.", animate: "fade-left" }
    ].map((item) => {
        return (
            <Grid lg={4} md={4} sm={4} xs={12} className='servicesBox' item key={item.title} sx={{
                backgroundImage: `url(${item.icon})`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                p: '20px',
                borderRadius: '30px',
                m: { xs: "10px", sm: "10px", md: "10px 20px 20px 0px", lg: '10px 20px 20px 0px' },
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} data-aos={`${item.animate}`}>
                <Typography className='servicesBoxhead' variant='h1' sx={{ fontSize: { lg: '25px', md: '25px', sm: '18px' }, fontWeight: 900, color: 'white', m: '0px 0px 30px 20px' }}>{item.title}</Typography>
                <Typography className='servicesBoxpara' paragraph sx={{ m: '-20px 0px 0px 20px', color: 'white', fontSize: { lg: '17px', md: '17px', sm: '14px', xs: '18px' } }}>{state.currentScreenSize < 700 ? item.desc.slice(0, 100) + '...' : item.desc}</Typography>
            </Grid>
        );
    });

    useEffect(() => {
        AOS.init({ duration: 2000});
    }, []);

    return (
        <>
            {state.currentScreenSize < 918 && <BottomNavBar />}
            <Header />
            <Container disableGutters maxWidth={false} sx={{ overflow: "hidden" }}>
                <Grid container sx={{ height: 'fit-content', padding: { lg: '200px 100px', xs: '100px 20px' }, backgroundImage: `url(${aboutimg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgb(80,80,80)', backgroundBlendMode: 'multiply', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Grid item xs={12} lg={4} sx={{ height: '300px', mb: { xs: '40px', lg: '0px', sm: '0px', md: '0px' } }}>
                        <Grid container>
                            <Grid item xs={12} sx={{ borderLeft: `5px solid ${MAIN_COLOR}`, padding: '10px' }}>
                                <Typography variant='h1' sx={{ fontSize: { lg: '40px', xs: '20px' }, color: 'white', fontWeight: '600' }}>
                                    About Our AdelSocial <br />IT Company
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: '12px' }}>
                                <Typography sx={{ color: 'white', fontSize: '15px' }}>Adelsocial is a privately owned one-stop solution for IT services formed in 2020. We at Adel social have a specialized team of expert IT engineers ... </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: '15px' }}>
                                <Button variant='contained' sx={{ color: 'white' }}>View our work</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{ height: 'fit-content' }}>
                        <Grid container>
                            <Grid item xs={12} >
                                <Typography sx={{ color: MAIN_COLOR, fontSize: '35px', fontWeight: '600' }}>What We Do</Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ alignItems: 'center' }}>
                            <OpenInBrowserIcon sx={{ color: MAIN_COLOR, fontSize: '45px', mr: '20px' }} />
                            <Typography sx={{ color: 'white', fontSize: '17px', fontWeight: "600" }}>Build Websites</Typography>
                            <Typography sx={{ color: '#eeeeee', fontSize: '13px' }}>We at Adel social work dedicatedly, with a well-organized team of skilled IT engineers.</Typography>
                        </Grid>
                        <Grid container sx={{ alignItems: 'center', mt: "10px" }}>
                            <AppSettingsAltIcon sx={{ color: MAIN_COLOR, fontSize: '45px', mr: '20px' }} />
                            <Typography sx={{ color: 'white', fontSize: '17px', fontWeight: "600" }}>App Development</Typography>
                            <Typography sx={{ color: '#eeeeee', fontSize: '13px' }}>We at Adel social work dedicatedly, with a well-organized team of skilled IT engineers.</Typography>
                        </Grid>
                        <Grid container sx={{ alignItems: 'center', mt: "10px" }}>
                            <BlurOnIcon sx={{ color: MAIN_COLOR, fontSize: '45px', mr: '20px' }} />
                            <Typography sx={{ color: 'white', fontSize: '17px', fontWeight: "600" }}>SEO Services</Typography>
                            <Typography sx={{ color: '#eeeeee', fontSize: '13px' }}>We at Adel social work dedicatedly, with a well-organized team of skilled IT engineers.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sx={{ bgcolor: 'black', height: '470px', textAlign: "center", padding: '20px 25px' }}>
                        <Typography variant='h1' sx={{ color: 'white', fontSize: { lg: '41px', xs: '20px' }, fontWeight: '600', mt: '15px' }}>Let's Realize Your <br /><span style={{ color: MAIN_COLOR }}>Digital</span> Business Now</Typography>
                        <hr></hr>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Typography sx={{ color: 'grey', fontSize: { lg: '15px', md: '14px', sm: '14px', xs: '13px' }, mt: '5px' }}>HOW LONG IS YOUR EXPERIENCE</Typography>
                            <Typography sx={{ color: 'grey', fontSize: { lg: '15px', md: '14px', sm: '14px', xs: '13px' }, mt: '5px' }}>WE HAVE 10 YEARS EXPERIENCE</Typography>
                        </Box>
                    </Grid>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={9.5} sx={{ height: { lg: '430px', xs: '320px' }, mt: '-15rem', backgroundBlendMode: 'multiply', backgroundImage: `url(${adelteam})`, borderRadius: '20px', backgroundSize: { lg: 'cover', md: 'cover', sm: 'cover', xs: 'cover' }, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} data-aos="fade-up"></Grid>
                        <Grid item xs={9.5} sx={{ display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' }, mt: '10px' }}>
                            <Grid container sx={{ padding: '10px 0px', borderRadius: "20px", border: '3.5px solid black', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }} >
                                <Grid item lg={3} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant='h2' sx={{ fontSize: { lg: '30px', md: '25px', sm: '22px', xs: '23px' }, fontWeight: '600', color: MAIN_COLOR }}>Our Milestones</Typography>
                                </Grid>
                                <Grid item lg={2} md={3} sm={3} xs={3.5} sx={{ textAlign: 'center', border: '2px solid black', borderRadius: '20px', mr: '6px', padding: '10px', ml: '8px' }}>
                                    <Typography sx={{ fontSize: { lg: '25px', md: '22', sm: '20px', xs: '18px' }, fontWeight: '600' }}>300<span style={{ color: MAIN_COLOR }}>+</span></Typography>
                                    <Typography sx={{ color: 'grey', fontSize: { lg: '15px', md: '14px', sm: '12px', xs: '9px' } }}>Products</Typography>
                                </Grid>
                                <Grid item lg={2} md={3} sm={3} xs={3.5} sx={{ textAlign: 'center', border: '2px solid black', borderRadius: '20px', mr: '6px', padding: '10px' }}>
                                    <Typography sx={{ fontSize: { lg: '25px', md: '22', sm: '20px', xs: '18px' }, fontWeight: '600' }}>300<span style={{ color: MAIN_COLOR }}>+</span></Typography>
                                    <Typography sx={{ color: 'grey', fontSize: { lg: '15px', md: '14px', sm: '12px', xs: '9px' } }}>Testimonials</Typography>
                                </Grid>
                                <Grid item lg={2} md={3} sm={3} xs={3.5} sx={{ textAlign: 'center', border: '2px solid black', borderRadius: '20px', mr: '6px', padding: '10px' }}>
                                    <Typography sx={{ fontSize: { lg: '25px', md: '22', sm: '20px', xs: '18px' }, fontWeight: '600' }}>300<span style={{ color: MAIN_COLOR }}>+</span></Typography>
                                    <Typography sx={{ color: 'grey', fontSize: { lg: '15px', md: '14px', sm: '12px', xs: '9px' } }}>Experience</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', bgcolor: '#f8f8f8', padding: '10px', bgcolor: '#080808', mt: '10px' }}>
                    <Grid item lg={4.5} md={4.5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} data-aos="fade-right">
                        <Typography variant='h2' sx={{ fontSize: { lg: '30px', md: '30px', sm: '30px', xs: '28px' }, fontWeight: '600', color: MAIN_COLOR }}>Who Are We?</Typography>
                        <Typography variant='subtitle2' sx={{ fontSize: { lg: '16px', md: '16px', sm: '13px', xs: '14px', }, mt: '20px', color: '#eeeeee' }}>AdelSocial is a privately owned IT Support and IT Services business formed in 2020. Today we’re proud to boast a strong team of IT engineers who thrive on rolling up their sleeves and solving your IT problems and meeting your business needs. Our vertical solutions expertise allows your business to streamline workflow, and increase productivity. No matter the business, AdelSocial has you covered with industry-compliant solutions, customized to your company’s specific needs.</Typography>
                    </Grid>
                    <Grid item lg={5} md={5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '5px', xs: '8px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }} data-aos="fade-left">
                        <Box sx={{ width: { lg: '80%', md: '80%', sm: '100%', xs: '100%' }, height: { lg: '400px', md: '400px', sm: '390px', xs: '350px' }, borderRadius: { lg: '15%', md: '15%', sm: '10%', xs: '10px' }, mt: '25px' }}>
                            <img src={adelteam} alt='meeting' width={'100%'} height={'95%'} style={{ borderRadius: '10%' }} />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ flexWrap: "wrap-reverse", display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', bgcolor: '#080808', pb: "20px", padding: '10px', }}>
                    <Grid item lg={5} md={5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '5px', xs: '15px' }, display: 'flex', justifyContent: 'center', alignItems: 'center', }} data-aos="fade-right">
                        <Box sx={{ width: { lg: '80%', md: '80%', sm: '100%', xs: '100%' }, height: '350px', borderRadius: '10%' }}>
                            <img src={adelteam} alt='meeting' width={'100%'} height={'100%'} style={{ borderRadius: '10%' }} />
                        </Box>
                    </Grid>
                    <Grid item lg={4.5} md={5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} data-aos="fade-left">
                        <Typography variant='h4' sx={{ fontSize: { lg: '30px', md: '30px', sm: '30px', xs: '28px' }, fontWeight: '600', m: '20px', color: MAIN_COLOR }}>OUR VISION</Typography>
                        <Typography sx={{ fontSize: { lg: '16px', md: '16px', sm: '13px', xs: '14px', }, color: '#eeeeee', ml: "" }}>We have established ourselves as an effusive IT agency that strives to value ethics, commitment, and quality to our clients. We are constantly working to maintain our positions as the best and to elevate ourselves by providing exceptional services.</Typography>
                    </Grid>
                </Grid>
                <Grid container sx={{ bgcolor: 'white', mt: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', p: "10px" }}>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }} >
                        <Typography variant='h2' sx={{ fontSize: { lg: '30px', md: '30px', sm: '30px', xs: '28px' }, fontWeight: '600', m: '20px', color: MAIN_COLOR }}>Our Services</Typography>
                        <Typography sx={{ fontSize: { lg: '18px', md: '18px', sm: '16px', xs: '15px' }, textAlign: 'center', fontFamily: 'Comfortaa", cursive', mt: '20px', color: 'grey' }}>We provide a wide range of services to meet all of your IT needs. Check out our main services below:</Typography>
                    </Grid>
                    <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                        {services}
                    </Grid>
                </Grid>
                <Grid container sx={{ bgcolor: 'white', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', pb: '20px' }}>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column', mt: '30px' }} data-aos="fade-up">
                        <Typography variant='h2' sx={{ fontSize: { lg: '30px', md: '30px', sm: '30px', xs: '28px' }, fontWeight: '600', m: '20px', color: MAIN_COLOR }}>Our Stats</Typography>
                        <Typography sx={{ fontSize: { lg: '18px', md: '18px', sm: '16px', xs: '15px' }, textAlign: 'center', fontFamily: 'Comfortaa", cursive', mt: '20px', color: 'grey' }}>We are proud of what we have achieved and the recognition we have received from our clients and the industry. Our stats showcase our commitment to excellence.</Typography>
                    </Grid>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', mt: '30px' }} data-aos="fade-up">
                        {data.map((item) => {
                            return <Grid item xs={12} sm={6} md={6} lg={2} sx={{ textAlign: 'center' }} key={item.text}>
                                <Typography variant='h1' sx={{ fontSize: { lg: '30px', md: '25px', sm: '20px', xs: '20px' }, fontWeight: '600', color: MAIN_COLOR }}>{item.number}</Typography>
                                <Typography variant='subtitle2' sx={{ fontSize: { lg: '20px', md: '18px', sm: '16px', xs: '16px' }, fontWeight: '600', color: 'grey', mt: '10px' }}>{item.text}</Typography>
                            </Grid>
                        })}
                    </Grid>
                </Grid>
                <SendMessage />
            </Container>
            <Footer />
        </>
    );
}

export default About;