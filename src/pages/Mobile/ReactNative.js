import { Box, Button, Container, Grid, Typography } from '@mui/material'
import awspic from '../../assets/reactnative.jpg'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SendMessage from '../../components/SendMessage'
import { MAIN_COLOR } from '../../constant'
// import orange from '../../assets/orange.jpg'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import adelteam from '../../assets/adelteam.jpg'
import new1 from '../../assets/androidnew2.jpg'
import useBottomBar from '../../utils/useBottomBar'
import '../Homepage.css'
// import orange from '../../assets/orange.jpg'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import ApartmentIcon from '@mui/icons-material/Apartment'
import ChairAltIcon from '@mui/icons-material/ChairAlt'
import DomainIcon from '@mui/icons-material/Domain'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import LuggageIcon from '@mui/icons-material/Luggage'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../Homepage.css'
import BottomNavBar from '../../global/BottomNavBar'


const ReactNative = () => {
    
    const { state } = useBottomBar()
    
 useEffect(()=>{
    AOS.init({
        duration:2000
    })
 },[])

    const AllBuisness = [{
        icon: <ApartmentIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Healthcare"
    },
    {
        icon: <ChairAltIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Education & E-Learning"
    },
    {
        icon: <AddShoppingCartIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Retail & E-Commerce"
    },
    {
        icon: <AccountBalanceIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Banking & Finance"
    },
    {
        icon: <LuggageIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Travel & Tourism"
    },
    {
        icon: <LiveTvIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Media & Entertainment"
    },

    {
        icon: <LocalShippingIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Transport & Logistics"
    },

    {
        icon: <DomainIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Real Estate"
    },

    ]


    return (
        <>
            {state.currentScreenSize < 918 && <BottomNavBar />}
            <Header />

            <Container disableGutters maxWidth={'xl'}>
                <Grid container>
                    <Grid item xs={12} sx={{ height:{lg:"80vh",md:"75vh",sm:"65vh",xs:"60vh"},backgroundImage: `url(${awspic})`, backgroundBlendMode: "multiply", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", bgcolor: "rgba(0, 0, 0, 0.5)", p: {lg:"30px",md:"25px",sm:"18px",xs:"10px"} }}>

                        <Grid container sx={{ p: "10px",mt:"40px" }}>
                            <Grid item xs={2} sm={2} md={1} lg={1} >

                            </Grid>

                            <Grid item xs={12} sm={12} md={10} lg={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Box sx={{ lineHeight: "10", pt: '40px' }}>
                                    <Box>
                                        <Typography variant='h3' sx={{ fontWeight: "800", color: "white",  fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"}}}>
                                            Hire Adnroid Developer Developers
                                        </Typography>
                                        <Typography sx={{ color: "white", mt: "20px", fontSize: { lg: "15px", xs: '13px', md: '15px',sm:"14px" } }}>
                                            Get Zero Headache Adnroid Developers who are ready to take your project within 24 hours and carry out project development efficiently by following the best Adnroid development practices. We, at AdelSocial, leave no stone unturned in delivering bug-free and high-performance Adnroid solutions.
                                        </Typography>
                                        <Box sx={{ mt: "40px", display: "flex", justifyContent: { xs: "center", sm: "center", md: "center", lg: "left" } }}>
                                            <Button variant='contained' sx={{ textTransform: 'unset', bgcolor: MAIN_COLOR, fontSize: "17px", borderRadius: "16px", fontWeight: "800", p: "10px 40px", "&:hover": { bgcolor: MAIN_COLOR } }}>
                                                Hire Now
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    


                    <Grid item xs={12}>

                    <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', bgcolor:"rgba(10,8,59,0.9)", padding: '10px'}}>
                    <Grid item lg={4.5} md={4.5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        <Typography variant='h2' sx={{fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"}, fontWeight: '600', color: MAIN_COLOR }}>Who Are We?</Typography>
                        <Typography variant='subtitle2' sx={{fontSize: { lg: "15px", xs: '13px', md: '15px',sm:"14px" }, mt: '20px', color: '#eeeeee' }}>AdelSocial is a privately owned IT Support and IT Services business formed in 2020. Today we’re proud to boast a strong team of IT engineers who thrive on rolling up their sleeves and solving your IT problems and meeting your business needs. Our vertical solutions expertise allows your business to streamline workflow, and increase productivity. No matter the business, AdelSocial has you covered with industry-compliant solutions, customized to your company’s specific needs.</Typography>
                    </Grid>
                    <Grid item lg={5} md={5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '5px', xs: '8px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Box sx={{ width: { lg: '80%', md: '80%', sm: '100%', xs: '100%' }, height: { lg: '400px', md: '400px', sm: '390px', xs: '350px' }, borderRadius: { lg: '15%', md: '15%', sm: '10%', xs: '10px' }, mt: '25px' }}>
                            <img src={new1} alt='meeting' width={'100%'} height={'95%'} style={{ borderRadius: '10%' }} />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ flexWrap: "wrap-reverse", display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', bgcolor: 'rgba(10,8,59,0.9)', pb: "20px", padding: '10px', }}>
                    <Grid item lg={5} md={5} sm={12} xs={12} data-aos="fade-up" sx={{ mt: { lg: '0px', md: '0px', sm: '5px', xs: '15px' }, display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                        <Box sx={{ width: { lg: '80%', md: '80%', sm: '100%', xs: '100%' }, height: '350px', borderRadius: '10%' }}>
                            <img src={adelteam} alt='meeting' width={'100%'} height={'100%'} style={{ borderRadius: '10%' }} />
                        </Box>
                    </Grid>
                    <Grid item lg={4.5} md={5} sm={12} xs={12} data-aos="fade-up" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        <Typography variant='h4' sx={{  fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"}, fontWeight: '600', m: '20px', color: MAIN_COLOR }}>OUR VISION</Typography>
                        <Typography sx={{ fontSize: { lg: "15px", xs: '13px', md: '15px',sm:"14px" }, color: '#eeeeee', ml: "" }}>We have established ourselves as an effusive IT agency that strives to value ethics, commitment, and quality to our clients. We are constantly working to maintain our positions as the best and to elevate ourselves by providing exceptional services.</Typography>
                    </Grid>
                </Grid>
                    </Grid>



                    <Grid item xs={12} sx={{ pb: "15px" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", mb: '20px' }} data-aos="fade-up">
                        <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, mt: "20px" }}>
                            <Typography  align='center' sx={{fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"}, fontWeight: "800", color: MAIN_COLOR }} >
                                We Build Scalable React Native Solutions for All Business Verticals
                            </Typography>
                            <Typography sx={{  fontSize: { lg: "15px", xs: '13px', md: '15px',sm:"14px" },textAlign: { xs: "", sm: "", md: "center", lg: "center" }, mt: "10px" }}>
                                When you hire React Native app developers from AdelSocial, you hire a team of React Native specialists that holds expertise in developing React Native solutions for a diverse range of industry verticals.
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
                        <Grid container sx={{ width: { xs: "99%", sm: "99%", md: "70%", lg: "80%" }, display:'flex', justifyContent:'space-between', alignItems:'center', bgcolor:'black', borderRadius:'10px'}} >
                            {
                                AllBuisness.map((ele) => {
                                    return (
                                        <Grid item xs={12} sm={12} md={6} lg={2.8} data-aos="fade-up" sx={{ boxShadow: '1px 1px 5px 0px rgba(65,100,240,1)',m:'5px', m:'10px 9px' ,borderRadius:'10px'}} >
                                            <Box sx={{height:'210px', bgcolor:'black',borderRadius:'10px', border:'1px solid #0277bd'}}>
                                                <Box sx={{ p: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                                    {ele.icon}
                                                    <Typography align='center' sx={{ fontSize: "28px", fontWeight: "800", color: 'white' }}>{ele.name}</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                    </Box>
                </Grid>

                  
                    
                </Grid>


                <Footer />

            </Container >

        </>
    )
}

export default ReactNative
