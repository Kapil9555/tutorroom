import { Box, Button, Container, Grid, OutlinedInput, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import digitalmarketing from '../.././assets/digitalmarketingg.jpg'
import clutch from '../../assets/clutch.png'
import googleFirm from '../../assets/google-firms.png'
import wordPress from '../../assets/hire-wordpress-developer-banner.jpg'
import hp5 from '../../assets/hp-Hero-logo.png'
import hp4 from '../../assets/hp-Ikea-Logo.png'
import hp3 from '../../assets/hp-Panasonic.png'
import hp2 from '../../assets/hp-PernodRicard.png'
import hp1 from '../../assets/hp-and.png'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SendMessage from '../../components/SendMessage'
import { MAIN_COLOR } from '../../constant'
import useBottomBar from '../../utils/useBottomBar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import BottomNavBar from '../../global/BottomNavBar'




const DigitalMarketing = () => {
   
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    const { state } = useBottomBar()
    let six = [{
        title: "Social media marketing",
        des: "Having a social media presence as a business trying to make it in the digital world will help you grow your customer base. With over three billion active users across most social media platforms, your company must use social media to grow"
    }, {
        title: "Web development services",
        des: "Finding a web development company that understands your goals and can deliver the best results possible within your budget can be difficult at times.Though you can choose a..."
    },
    {
        title: "Our web design services",
        des: "Our company was founded to provide our clients with web services. We are accountable for what we promise and always promise to provide services such as Solutions for custom web design"
    }
        ,
    {
        title: "E-commerce website",
        des: "E-commerce website development allows you to buy or sell products online, essentially making trade easier. Consumers can use e-commerce websites to research, analyze, search, and browse. Increase your purchasing options.."
    },
    {
        title: "WordPress Creation ",
        des: "Though WordPress is the most popular content management system on the internet today. Every company wants to keep its website active. It all comes down to designing and implementing websites with the WordPress creation tool... "
    },
    {
        title: "Drupal creation",
        des: "We are experts in Drupal website development, theme development, support and other types of maintenance services, custom Drupal applications, and Drupal migration services. Our team of highly experienced Drupal developers is ready to provide the best services..."
    }

    ]

    let four = [{
        title: "Effective research ",
        des: "Effective research can benefit your company. To create a program that appeals to your target market, you must thoroughly analyze market trends, client expectations, and preferences. By conducting a thorough market analysis, you can learn more about the types of apps that are steadily gaining popularity among smartphone users."
    }, {
        title: "Determine your target audience.",
        des: "Because every mobile application, including yours, aims to solve a problem, it is difficult to predict who your mobile application's target market is. You must conduct surveys, read online forums, and use tools to better understand your market. Personas can be used to demonstrate the needs of various audience groups..."
    },
    {
        title: "Safety comes first.",
        des: "Nothing is more important than maintaining the security of a website or application. Even though several mobile app applications frequently disregard security and suffer disastrous consequences. In our digital age, data is everything, and it must be properly protected."
    }
        ,
    {
        title: "Should keep track of issues",
        des: "Every internet business must handle commitments with extreme caution. There is a significant risk involved, and sporadic fraud and hacking incidents may occur, necessitating legal intervention."
    },


    ]

    return (
         <>
          {state.currentScreenSize < 918 && <BottomNavBar />}
            <Header />
            <Container disableGutters maxWidth>

                <Grid container >
                    <Grid item xs={12} sx={{ backgroundImage: `url(${wordPress})`, backgroundBlendMode: "multiply", backgroundRepeat: "no-repeat", backgroundSize: "cover", bgcolor: "rgba(0, 0, 0, 0.5)", p: "10px", overflow:'hidden',  }}>

                        <Grid container sx={{  display:'flex', justifyContent:'center', alignItems:'center', pb:'35px', mt:'70px',}}>
                            

                            <Grid item xs={12} sm={12} md={10} lg={7} sx={{ display: "flex", justifyContent: 'center', alignItems: "center", pl:{lg:'40px', xs:'5px'}, }}>
                                <Box >
                                    <Box>
                                        <Typography variant='h4' sx={{ fontWeight: "800", color: "white", fontSize:{lg:'33px', md:'30px', sm:'30px', xs:'22px'} }}>

                                            Digital has emerged as the most dependable method for attracting new clients and growing a business.

                                        </Typography>
                                        <Typography sx={{ color: 'white' , fontSize:{lg:'16px', md:'15px', sm:'13px', xs:'13px'}, mt:'8px'}}>
                                            As we all know, Digital Search engine optimization is simple yet powerful in its simplicity, and it can help your business thrive. Though Digital is all about making changes to your website's design and content to make it more appealing to search engines.
                                            Digital has emerged as the most dependable method for attracting new clients and growing a business.
                                        </Typography>

                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} lg={5} sx={{ mt: { xs: "70px", sm: "70px", md: "70px", lg: "35px" }, display: { xs: "none", sm: "none", md: "none", lg: "block" } }}>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                                    <Paper sx={{ height: "fit-content", width: { xs: "90%", sm: "90%", md: "65%", lg: "65%" }, lineHeight: "4.5", p: "0px 14px 14px 14px " }}>
                                        <Box sx={{ mt: "-20px", borderRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Box sx={{ p: "20px", borderRadius: "15px", bgcolor: MAIN_COLOR, width: "60%" }}>
                                                <Typography align='center' sx={{ color: "white",whiteSpace:"nowrap", fontSize:{xs:"13px"}, bgcolor: MAIN_COLOR }}>
                                                    Request a free quote
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <OutlinedInput placeholder='Full Name' fullWidth sx={{ height: "40px" }} />
                                        <OutlinedInput placeholder='Buisness Email Address' fullWidth sx={{ height: "40px" }} />
                                        <OutlinedInput placeholder='Phone Number' fullWidth sx={{ height: "40px" }} />
                                        <OutlinedInput placeholder='Oragnisation/Institution' fullWidth sx={{ height: "40px" }} />
                                        <OutlinedInput placeholder='Message' fullWidth sx={{ height: "40px" }} />

                                        <Button variant='contained' sx={{ bgcolor: MAIN_COLOR, fontSize: "17px", borderRadius: "25px", fontWeight: "800", p: "10px 15px 10px 15px", "&:hover": { bgcolor: MAIN_COLOR } }} fullWidth>
                                            submit
                                        </Button>

                                    </Paper>
                                </Box>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} lg={5} sx={{ mb: "20px", mt: { xs: "30px", sm: "30px", md: "30px", lg: "35px" }, display: { xs: "block", sm: "block", md: "block", lg: "none" } }}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                            <Paper sx={{ height: "fit-content", width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, lineHeight: "4.5", p: "0px 14px 14px 14px " }}>
                                <Box sx={{ mt: "-20px", borderRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Box sx={{ p: "20px", borderRadius: "15px", bgcolor: MAIN_COLOR, width: "60%" }}>
                                        <Typography align='center' sx={{ color: "white",whiteSpace:"nowrap", fontSize:"15px", bgcolor: MAIN_COLOR }}>
                                            Request a free quote
                                        </Typography>
                                    </Box>
                                </Box>
                                <OutlinedInput placeholder='Full Name' fullWidth sx={{ height: "40px" }} />
                                <OutlinedInput placeholder='Buisness Email Address' fullWidth sx={{ height: "40px" }} />
                                <OutlinedInput placeholder='Phone Number' fullWidth sx={{ height: "40px" }} />
                                <OutlinedInput placeholder='Oragnisation/Institution' fullWidth sx={{ height: "40px" }} />
                                <OutlinedInput placeholder='Message' fullWidth sx={{ height: "40px" }} />

                                <Button variant='contained' sx={{ bgcolor: MAIN_COLOR, fontSize: "17px", borderRadius: "25px", fontWeight: "800", p: "10px 15px 10px 15px", "&:hover": { bgcolor: MAIN_COLOR } }} fullWidth>
                                    submit
                                </Button>

                            </Paper>
                        </Box>
                    </Grid>>

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "10px",  mt: {lg:"-45px", md:'0', sm:'', xs:''} }}>
                    <Grid container xs={8} sx={{ bgcolor: "white", boxShadow: " 0px -2px 38px -7px rgba(0,0,0,0.44)", p: "7px 3px", borderRadius: "15px" }}>
                        <Grid item xs={12} md={6} lg={3} sx={{ borderRight: {lg:"1px solid #efefef", md:'1px solid #efefef', sm:'', xs:''}}} spacing={2}>

                            <Typography align='center' sx={{ fontSize: {lg:"40px", md:'35px', sm:'30px', xs:'25px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                600+
                            </Typography>
                            <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                                Happy Clients
                            </Typography>

                        </Grid>

                        <Grid item xs={12} md={6} lg={3} sx={{ borderRight: {lg:"1px solid #efefef", md:'1px solid #efefef', sm:'', xs:''}}}>

                            <Typography align='center' sx={{ fontSize:  {lg:"40px", md:'35px', sm:'30px', xs:'25px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                50+
                            </Typography>
                            <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                                Happy Clients
                            </Typography>

                        </Grid>

                        <Grid item xs={12} md={6} lg={3} sx={{ borderRight: {lg:"1px solid #efefef", md:'1px solid #efefef', sm:'', xs:''} }}>

                            <Typography align='center' sx={{  fontSize:{lg:"40px", md:'35px', sm:'30px', xs:'25px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                21+
                            </Typography>
                            <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                                Happy Clients
                            </Typography>

                        </Grid>

                        <Grid item xs={12} md={6} lg={3} sx={{ borderRight: {lg:"1px solid #efefef", md:'1px solid #efefef', sm:'', xs:''} }}>

                            <Typography align='center' sx={{ fontSize:  {lg:"40px", md:'35px', sm:'30px', xs:'25px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                400+
                            </Typography>
                            <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                                Happy Clients
                            </Typography>

                        </Grid>

                    </Grid>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "10px" }}>
                    <Grid container xs={4} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Grid item data-aos='fade-right' xs={12} sm={12} md={5.5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
                           <Box sx={{width:{lg:'180px', md:'160px', sm:'140px', xs:'120px'}, height:{lg:'85px', md:'80px', sm:'76px', xs:'70px'} }}>
                            <img src={clutch}  alt='clutch' height={'100%'} width={'100%'}/>

                           </Box>
                            <Typography align='center' sx={{ fontSize: "15px",fontWeight:'800' }}> We are rated 4.8 out of 5  on average.</Typography>
                        </Grid>
                        <Grid item data-aos='fade-left' xs={12} sm={12} md={5.5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", mt:{xs:'10px'} }}>
                        <Box sx={{width:{lg:'180px', md:'160px', sm:'160px', xs:'155px'}, height:{lg:'85px', md:'80px', sm:'76px', xs:'70px'} }}>

                            <img src={googleFirm} alt='googlefirm' height={'100%'} width={'100%'}/>
                        </Box>
                            <Typography align='center' sx={{ fontSize: "15px", fontWeight:'800' }}> We are rated 4.8 out of 5  on average.</Typography>

                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ display:{ lg:"flex", md:'flex', sm:'flex', xs:'none'}, justifyContent: "center", alignItems: "center", bgcolor: "black", p: "15px", m: '30px' }}>
                    <Grid container xs={12}  >
                        <Grid item xs={2} sm={2} md={2} lg={2} data-aos='fade-up' sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{width:{lg:'170px', md:'130px', sm:'90px', xs:'70px'}, height:{lg:'60px', md:'50px', sm:'50px', xs:'40px'}}}>
                            <Typography sx={{ fontSize: {lg:"18px", md:'16px', sm:'13px', xs:'11px'}, color: "white", fontWeight:'900' }}>
                                Trusted by Global Brands
                            </Typography>
                            </Box>
                           
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2}data-aos='fade-up'sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <Box sx={{width:{lg:'170px', md:'130px', sm:'90px', xs:'70px'}, height:{lg:'60px', md:'50px', sm:'50px', xs:'40px'} }}>

                            <img src={hp1} alt='img' height="100%" width="100%" />
                        </Box>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2} data-aos='fade-up'sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <Box sx={{width:{lg:'170px', md:'130px', sm:'90px', xs:'70px'}, height:{lg:'60px', md:'50px', sm:'45px', xs:'38px'} }}>

                            <img src={hp2} alt='img' height="100%" width="100%" />
                        </Box>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2} data-aos='fade-up'sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{width:{lg:'170px', md:'130px', sm:'90px', xs:'70px'}, height:{lg:'60px', md:'50px', sm:'45px', xs:'38px'} }}>

                            <img src={hp3} alt='img' height="100%" width="100%" />
                        </Box>
                        </Grid>
                        <Grid item xxs={2} sm={2} md={2} lg={2} data-aos='fade-up'sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{width:{lg:'170px', md:'130px', sm:'90px', xs:'70px'}, height:{lg:'60px', md:'50px', sm:'45px', xs:'38px'}  }}>

                            <img src={hp4} alt='img' height="100%" width="100%" />
                        </Box>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2} data-aos='fade-up'sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{width:{lg:'170px', md:'130px', sm:'90px', xs:'70px'}, height:{lg:'60px', md:'50px', sm:'45px', xs:'38px'}  }}>

                            <img src={hp5} alt='img' height="100%" width="100%" />
                        </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container sx={{ p: { xs: "8px", sm: "8px", md: "8px", lg: "15px", m: '20px 0px' } , justifyContent:'space-evenly', alignItems:'center'}}>
                    
                    <Grid item xs={12} md={5} lg={5} data-aos='fade-up'>
                        <Typography  sx={{ fontSize:{lg:'33px', md:'30px', sm:'30px', xs:'22px'}, fontWeight: "800", color: MAIN_COLOR }} >
                            What makes us reliable among customers?
                        </Typography>
                        <Typography sx={{ mt: "10px", fontSize:{ lg:"16px", xs:'15px'}, mb: "15px" }} >
                            As we all know, going digital is the new age requirement in marketing, so we are always excited to empower clients in all necessary areas such as social media sharing.</Typography>
                        <ul>
                            <li style={{ fontSize: {lg:"16px", xs:'14px'} }}><b>Digital gives 24 /7 promotion
                            </b>
                                Your content will determine how you promote your business; the more informative and influencing it is, the more leads it will generate and the higher it will rank in search engines.</li>
                            <li style={{ fontSize:  {lg:"16px", xs:'14px'} }}>Domain security Creative writing</li>
                            <li style={{ fontSize:  {lg:"16px", xs:'14px'}  }}>Interactive Advertisements methods for making their venture a little better while also growing.</li>


                        </ul>
                        



                    </Grid>
                    <Grid item xs={12} md={5} lg={5} sx={{display:'flex', justifyContent:'center', alignItems:'center', mt:{xs:'10px'}}} >
                        <Box  data-aos='fade-up' sx={{ height: "350px", width: { xs: "90%", sm: "85%", md: "80%", lg: "80%" }, borderRadius: "25px", overflow: "hidden",boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)' }}>
                            <img src={digitalmarketing} height="100%" width="100%" alt='img3' />
                        </Box>
                    </Grid>
                </Grid>


                <Box sx={{  display: "flex", justifyContent: "center", alignItems: "center", p: { xs: "8px", sm: "8px", md: "8px", lg: "15px" } , bgcolor:'black'}}>
                    <Grid container xs={12} sm={12} md={10} lg={9}>
                        <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                            <Box data-aos='fade-up'>
                                <Typography sx={{ fontSize:{lg:'33px', md:'30px', sm:'30px', xs:'22px'}, mb: '20px', fontWeight: "800", color: MAIN_COLOR, textAlign:{lg:'center', md:'center', sm:'center', xs:''} }} >
                                    The need for a high-quality Digital strategy has not only been higher but essential. If you are not applying that, you can be that competitors are!

                                </Typography>
                                <Typography sx={{ fontSize: "20px", fontWeight: "400", ml:'10px', color:'white' }}>
                                    Our services provide a unique range of benefits -
                                </Typography>
                            </Box>
                        </Grid>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Grid container xs={12} spacing={3}>
                                {
                                    six.map((ele) => {
                                        return (
                                            <Grid item xs={12} sm={6} md={6} data-aos='fade-up' sx={{ mt: "15px" , pb:'10px', }} >
                                                <Paper sx={{ height:{lg:'180px', md:'180px', sm:'200px',xs:'220px'}, overflow: "hidden", borderRadius: "35px 10px 35px 10px",boxShadow: ' 0px 0px 13px 0px rgba(9,49,150,1)',display:'flex', justifyContent:'left', alignItems:'flex-start', flexDirection:'column', border:`1px solid ${MAIN_COLOR}`, padding:'20px' }} elevation={3}>
                                                    <Typography sx={{ fontSize: "23px", fontWeight: "800", color: MAIN_COLOR ,}} >
                                                        {ele.title}
                                                    </Typography>
                                                    <Typography sx={{ mt: "10px", fontSize: { lg:"14px", xs:'14px'}, fontWeight: "400",  }}>
                                                        {ele.des}
                                                    </Typography>
                                                </Paper>
                                            </Grid>
                                        )
                                    })
                                }

                            </Grid>
                        </Box>
                    </Grid>
                </Box>



                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "black" ,}}>
                    <Grid container xs={12} sm={12} md={10} lg={8}>
                        <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                            <Box data-aos='fade-up'>
                                <Typography  sx={{ ml:'10px',fontSize:{lg:'33px', md:'30px', sm:'30px', xs:'22px'}, fontWeight: "800", color: MAIN_COLOR,textAlign:{lg:'center', md:'center', sm:'center', xs:''}  }} >
                                    We work hard and are dedicated to producing good results. Although developing an app is difficult, it is possible to determine the client's objectives and establish.

                                </Typography>
                                <Typography align='center' sx={{ color: "white", fontSize: "25px", fontWeight: "900", }}>
                                    Our priority areas
                                </Typography>
                            </Box>
                        </Grid>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", pb: "15px" }}>
                            <Grid container xs={12} spacing={3}>
                                {
                                    four.map((ele) => {
                                        return (
                                            <Grid item xs={12} sm={12} md={6} data-aos='fade-up' sx={{ mt: "30px" }}>
                                                <Paper sx={{ height: {lg:"210px", md:'210px', xs:'220px', xs:'280px'}, overflow: "hidden", borderRadius: "35px 10px 35px 10px", p: "25px", boxShadow: ' 0px 0px 13px 0px rgba(9,49,150,1)',display:'flex', justifyContent:'left', alignItems:'flex-start', flexDirection:'column',border:`1px solid ${MAIN_COLOR}` }} elevation={3}>
                                                    <Typography sx={{ fontSize: "23px", fontWeight: "800", color: MAIN_COLOR , }} >
                                                        {ele.title}
                                                    </Typography>
                                                    <Typography sx={{ mt: "10px",fontSize: { lg:"15px", xs:'14px'} ,fontWeight: "400",  }}>
                                                        {
                                                            ele.des
                                                        }
                                                    </Typography>
                                                </Paper>
                                            </Grid>
                                        )
                                    })
                                }

                            </Grid>
                        </Box>
                    </Grid>
                </Box>
                <SendMessage />
                <Footer />
            </Container>
        </>
    )
}

export default DigitalMarketing